import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
<<<<<<< HEAD
} from '@react-email/components';
=======
} from "@react-email/components";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

interface VerificationEmailProps {
  username: string;
  otp: string;
}

<<<<<<< HEAD
export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
=======
export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
<<<<<<< HEAD
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
=======
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
<<<<<<< HEAD
          <Text>{otp}</Text> 
=======
          <Text>{otp}</Text>
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        </Row>
        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
        {/* <Row>
<<<<<<< HEAD
          <Button
            href={`http://localhost:3000/verify/${username}`}
            style={{ color: '#61dafb' }}
          >
            Verify here
          </Button>
        </Row> */}
=======
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={{ color: '#61dafb' }}
            >
              Verify here
            </Button>
          </Row> */}
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      </Section>
    </Html>
  );
}
