const SITE_KEY = process.env.RECAPTCHA_KEY;
export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    if (req.method === "POST") {
        try {
            await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${SITE_KEY}&response=${body.gRecaptchaToken}`,
            })
                .then((reCaptchaRes) => reCaptchaRes.json())
                .then((reCaptchaRes) => {
                    console.log(
                        reCaptchaRes.score,
                        "Response from Google reCaptcha verification API"
                    );
                    if (reCaptchaRes?.score > 0.5) {
                        res.status(200).json({status: 'success', message: reCaptchaRes.score})
                    } else {
                        res.status(200).json({status: 'failure', message: reCaptchaRes.score})
                    }
                })
        } catch (err) {
            res.status(405).json({status: 'failure', message: 'Google recaptcha error'})
        }
    } else {
        res.status(405).json({status: 'failure', message: 'Not a post request'})
    }
}