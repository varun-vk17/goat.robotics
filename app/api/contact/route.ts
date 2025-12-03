import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real application, you would:
        // 1. Validate the data
        // 2. Send email to support/sales team
        // 3. Send auto-reply to user

        console.log('Contact Form Submission:', body);

        // Mock successful submission
        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { message: 'Error processing request' },
            { status: 500 }
        );
    }
}
