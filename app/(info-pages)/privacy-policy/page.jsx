import React from "react";

export default async function page() {
  return (
    <div className="max-w-screen-1xl mx-auto p-8  flex justify-center gap-6 items-center flex-col">
      <p className="font-semibold">
        At duseca, we take your privacy seriously and are committed to
        protecting the personal information you share with us. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard your
        information when you use our website or mobile applications.
      </p>
      <SectionPara
        title={"Information We Collect:"}
        description={`Personal Information: When you visit our website or use our mobile
        applications, we may collect personal information such as your name,
        email address, phone number, and any other information you voluntarily
        provide. Usage Data: We may also collect information about how you
        interact with our website or mobile applications, including your IP
        address, browser type, operating system, and pages visited.`}
      />
      <SectionPara
        title={"How We Use Your Information:"}
        description={`To Provide Services: We use the information we collect to provide, maintain, and improve our services, including developing new features and functionalities.
. To Communicate: We may use your contact information to communicate with you about your account, updates to our services, promotional offers, and other relevant information.
. To Personalize Content: We may use your information to personalize your experience on our website or mobile applications, including displaying tailored content and recommendations.
. To Ensure Security: We may use your information to detect, prevent, and address technical issues or security breaches.
`}
      />
      <SectionPara
        title={"Information Sharing and Disclosure:"}
        description={`Third-Party Service Providers: We may share your information with third-party service providers who help us deliver our services, process payments, or perform other business functions.
Legal Requirements: We may disclose your information in response to lawful requests from government authorities, court orders, or other legal processes.
Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to a third party as part of the transaction.

`}
      />
      <SectionPara
        title={"Data Security:"}
        description={`We take appropriate measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`}
      />
      <SectionPara
        title={"Your Choices:"}
        description={`Opt-Out: You may opt out of receiving promotional communications from us by following the unsubscribe instructions included in the communication or by contacting us directly.
Access and Correction: You may access or update your personal information by logging into your account or contacting us directly to request changes.
`}
      />
      <SectionPara
        title={"Children's Privacy:"}
        description={`Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately so we can take appropriate action.`}
      />
      <SectionPara
        title={"Changes to This Privacy Policy:"}
        description={`We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or mobile applications.`}
      />
      <SectionPara
        title={"Contact Us:"}
        description={`If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at support@duseca.com.`}
      />
      <p>This Privacy Policy was last updated on 15 May 2024.</p>
    </div>
  );
}

const SectionPara = ({ title, description }) => {
  return (
    <>
      <span className="text-start w-full font-semibold text-xl">{title}</span>
      <p>{description}</p>
    </>
  );
};
