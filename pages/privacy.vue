<template>
  <div>
    <LegalLayout
      kicker="Privacy"
      title-start="Privacy"
      title-em="policy."
      lede="Telroi is committed to protecting your privacy and handling personal data in a transparent, secure, and lawful manner. By accessing or using Telroi's Services, you agree to the terms of this Privacy Policy."
      last-updated="01 Feb 2026"
      :sections="sections"
    />

    <ClosingCta
      title-start="Privacy questions?"
      title-em="Reach our team."
      body="For data-subject requests, sub-processor lists or DPA review, write to support@telroi.ai."
      cta-text="support@telroi.ai"
      cta-href="mailto:support@telroi.ai"
    />
  </div>
</template>

<script setup lang="ts">
import type { LegalSection } from '~/components/LegalLayout.vue';

useHead({
  title: 'Telroi — Privacy policy',
  meta: [
    {
      name: 'description',
      content:
        "Telroi's Privacy Policy — what we collect, how we use it, how we share it, and the rights you have over the personal data we process."
    }
  ]
});

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    blocks: [
      {
        type: 'p',
        text: 'Telroi is a voice infrastructure and intelligence company providing carrier-grade voice routing, SIP trunking, interconnect services, and AI-native voice optimization tools for CPaaS platforms, banks, fintechs, enterprises, and regulated institutions.'
      }
    ]
  },
  {
    id: 'info-we-collect',
    title: 'Information we collect',
    blocks: [
      { type: 'p', text: 'We collect information in the following categories:' },
      { type: 'h3', text: 'Information you provide directly' },
      {
        type: 'ul',
        items: [
          'Name, company name, job title',
          'Business email address and phone number',
          'Account registration details',
          'Requests submitted via forms (e.g. demos, onboarding, support)',
          'Communications with Telroi (emails, calls, tickets)'
        ]
      },
      { type: 'h3', text: 'Technical and usage information' },
      {
        type: 'ul',
        items: [
          'IP address, browser type, device identifiers',
          'Log data, timestamps, API usage metrics',
          'Platform interaction data (routes, sessions, errors, performance metrics)'
        ]
      },
      { type: 'h3', text: 'Customer and call metadata (service data)' },
      { type: 'p', text: "When you use Telroi's voice services, we may process call timestamps and duration, routing metadata and quality metrics, and CLI information and signaling data." },
      {
        type: 'note',
        text: 'Important: Telroi does not monitor, listen to, or analyze call content unless explicitly enabled by the customer (e.g., call recording or analytics features).'
      }
    ]
  },
  {
    id: 'how-we-use',
    title: 'How we use information',
    blocks: [
      { type: 'p', text: 'We use collected information to:' },
      {
        type: 'ul',
        items: [
          'Provide, operate, and maintain our Services',
          'Provision voice infrastructure and route voice traffic',
          'Optimize call quality, latency, and delivery',
          'Detect fraud, artificial traffic, and abuse',
          'Comply with telecom regulations and lawful requests',
          'Communicate with customers and prospects',
          'Improve platform performance and reliability',
          'Meet legal, contractual, and regulatory obligations'
        ]
      }
    ]
  },
  {
    id: 'legal-basis',
    title: 'Legal basis for processing',
    blocks: [
      { type: 'p', text: 'Where applicable, we process personal data under one or more of the following legal bases:' },
      {
        type: 'ul',
        items: [
          'Performance of a contract',
          'Legitimate business interests',
          'Compliance with legal obligations',
          'Consent (where explicitly obtained)'
        ]
      }
    ]
  },
  {
    id: 'data-sharing',
    title: 'Data sharing and disclosure',
    blocks: [
      { type: 'p', text: 'We may share information with:' },
      {
        type: 'ul',
        items: [
          'Telecom carriers and interconnect partners (to deliver voice services)',
          'Cloud and infrastructure providers (hosting, monitoring, security)',
          'Regulators and law enforcement when legally required',
          'Professional advisers (legal, compliance, audit)'
        ]
      },
      { type: 'note', text: 'We do not sell personal data.' }
    ]
  },
  {
    id: 'transfers',
    title: 'International data transfers',
    blocks: [
      {
        type: 'p',
        text: 'Telroi operates globally. Your information may be transferred to and processed in countries outside your country of residence. Where required, we implement appropriate safeguards to protect transferred data in accordance with applicable laws.'
      }
    ]
  },
  {
    id: 'retention',
    title: 'Data retention',
    blocks: [
      { type: 'p', text: 'We retain information only for as long as necessary to:' },
      {
        type: 'ul',
        items: [
          'Provide our Services',
          'Meet regulatory and contractual obligations',
          'Resolve disputes and enforce agreements'
        ]
      },
      { type: 'p', text: 'Retention periods vary depending on data type, jurisdiction, and use case.' }
    ]
  },
  {
    id: 'security',
    title: 'Security measures',
    blocks: [
      { type: 'p', text: 'We implement industry-standard technical and organizational measures to protect data, including:' },
      {
        type: 'ul',
        items: [
          'Access controls and authentication',
          'Network monitoring and encryption',
          'Secure infrastructure and logging',
          'Regular security reviews'
        ]
      },
      { type: 'p', text: 'Despite these measures, no system is completely secure, and we cannot guarantee absolute security.' }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    blocks: [
      { type: 'p', text: 'Depending on your jurisdiction, you may have rights to:' },
      {
        type: 'ul',
        items: [
          'Access your personal data',
          'Correct inaccurate data',
          'Request deletion or restriction',
          'Object to certain processing',
          'Withdraw consent (where applicable)'
        ]
      },
      { type: 'p', text: 'Requests can be made by contacting us at support@telroi.ai.' }
    ]
  },
  {
    id: 'cookies',
    title: 'Cookies and tracking',
    blocks: [
      {
        type: 'p',
        text: 'Nothing that identifies you loads until you allow it. We store your language choice and your cookie decision on your own device. With your permission we also load Google Analytics, which sets its own cookies to measure which pages are read, and the Cal.com booking calendar. Decline and neither is loaded; withdraw analytics later and the cookies it set are cleared. Change your choice any time from the cookie settings link in the footer.'
      }
    ]
  },
  {
    id: 'third-party',
    title: 'Third-party links',
    blocks: [
      {
        type: 'p',
        text: 'Our Services may contain links to third-party websites or platforms. Telroi is not responsible for the privacy practices or content of those third parties.'
      }
    ]
  },
  {
    id: 'children',
    title: "Children's privacy",
    blocks: [
      {
        type: 'p',
        text: "Telroi's Services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors."
      }
    ]
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    blocks: [
      {
        type: 'p',
        text: 'We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Last updated" date.'
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      { type: 'p', text: 'If you have questions about this Privacy Policy or our data practices, contact us at:' },
      { type: 'p', text: 'Telroi · support@telroi.ai · https://telroi.ai' }
    ]
  }
];
</script>
