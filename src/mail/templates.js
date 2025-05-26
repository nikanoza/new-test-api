export const welcomeHtml = (name) => `<head>
    <title>Verify email</title>
</head>

<body style="text-align: center; color: #171B22; font-family: sans-serif;">

    <div class="header" style="background-color: #F2F2F2; margin: 0 auto; border-radius: 20px 20px 0 0; max-width: 600px; padding: 24px 12px;">
        <img src="https://samiori-api-production.up.railway.app/files/images/mail/logo.png" alt="samiori logo" style="object-fit: cover; display: block; margin: 0 auto; width: 60px; margin-bottom: 16px;">
        <h1 style="font-size: 32px; font-weight: 700; margin: 0;">Jano's wavarma</h1>
    </div>

    <div class="display" style="margin: 0 auto; max-width: 600px; padding: 24px 12px; background-color: #fff;">
        <p>Welcome ${name}!</p>
    </div

</body>

</html>`;
