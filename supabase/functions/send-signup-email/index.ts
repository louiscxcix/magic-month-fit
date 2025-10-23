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

    // Send email notification
    const emailResponse = await resend.emails.send({
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

    console.log("Email sent successfully:", emailResponse);

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
