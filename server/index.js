import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import fs from 'fs/promises'

const app = express()
app.use(cors())
app.use(express.json())

const contactSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	subject: z.string().min(1),
	message: z.string().min(10)
})

app.post('/api/contact', async (req, res) => {
	const parsed = contactSchema.safeParse(req.body)
	if (!parsed.success) {
		return res.status(400).json({ ok: false, errors: parsed.error.flatten() })
	}

	const { name, email, subject, message } = parsed.data

	const smtpHost = process.env.SMTP_HOST
	const smtpUser = process.env.SMTP_USER
	const smtpPass = process.env.SMTP_PASS
	const smtpPort = Number(process.env.SMTP_PORT || 587)
	const toEmail = process.env.TO_EMAIL || smtpUser
	const fromEmail = process.env.FROM_EMAIL || smtpUser

	try {
		if (smtpHost && smtpUser && smtpPass && toEmail) {
			const transporter = nodemailer.createTransport({
				host: smtpHost,
				port: smtpPort,
				secure: smtpPort === 465,
				auth: { user: smtpUser, pass: smtpPass }
			})

			await transporter.sendMail({
				from: `Portfolio Contact <${fromEmail}>`,
				to: toEmail,
				subject: `[Portfolio] ${subject}`,
				text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
				html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`
			})
			return res.json({ ok: true, sent: true })
		}

		await fs.mkdir('server/_inbox', { recursive: true })
		const filenameSafe = `${Date.now()}-${name.replace(/[^a-z0-9-_]/gi, '_')}.json`
		await fs.writeFile(`server/_inbox/${filenameSafe}`, JSON.stringify({ name, email, subject, message, receivedAt: new Date().toISOString() }, null, 2))
		return res.json({ ok: true, stored: true })
	} catch (err) {
		console.error('Contact handler error:', err)
		return res.status(500).json({ ok: false, error: 'Internal error' })
	}
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`API listening on http://localhost:${port}`)
})