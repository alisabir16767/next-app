import React from "react";
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="mx-auto p-4 bg-white rounded-lg shadow-md">
            <Text className="text-2xl font-bold mb-4">Welcome, {name}!</Text>
            <Text className="text-lg mb-4"> We&apos;re excited to have you on board. Here are some resources to get you started:</Text>
            <ul className="list-disc list-inside mb-4">
              <li><Link href="http://localhost:3000/getting-started" className="text-blue-500 hover:underline">Getting Started Guide</Link></li>
              <li><Link href="http://localhost:3000/support" className="text-blue-500 hover:underline">Support</Link></li>
              <li><Link href="http://localhost:3000/community" className="text-blue-500 hover:underline">Community</Link></li>
            </ul>
            <Text className="text-lg mb-4">If you have any questions, feel free to reach out to our support team.</Text>
            <Link href="http://localhost:3000" className="text-blue-500 hover:underline">www.BazzarConnect.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default WelcomeTemplate;