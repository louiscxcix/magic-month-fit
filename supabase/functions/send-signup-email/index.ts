import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.2.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SignupRequest {
  name: string;
  email: string;
  phone: string;
  plan: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, plan }: SignupRequest = await req.json();
    
    console.log("Processing signup request for:", email);

    // Validate inputs
    if (!name || !email || !phone || !plan) {
      throw new Error("Missing required fields");
    }

    // Send notification email to business owner
    const notificationEmail = await resend.emails.send({
      from: "Magic Mathis Coaching <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // Replace with your actual email
      subject: "New Signup - Magic Mathis Coaching",
      html: `
        <h1>New Signup Received</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Program:</strong> ${plan}</p>
        <p>Contact this person to discuss their transformation journey!</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Magic Mathis Coaching <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Magic Mathis Coaching!",
      html: `
        <h1>Thank You for Signing Up, ${name}!</h1>
        <p>We're excited to start your transformation journey with you.</p>
        <p><strong>Your Selected Program:</strong> ${plan}</p>
        <p>We'll be in touch soon to discuss your personalized coaching plan.</p>
        <p>If you have any questions in the meantime, feel free to reach out to us.</p>
        <br>
        <p>Best regards,<br>Magic Mathis Coaching Team</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-signup-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
