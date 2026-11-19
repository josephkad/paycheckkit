import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    const { error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.NOTIFY_EMAIL!,
        subject: 'Registered for my site!!!',
        text: 'Someone registered',
    })

    if (error) {
        console.error(error)
        return NextResponse.json({error}, {status: 500})
    }

    return NextResponse.json({ok: true})
}