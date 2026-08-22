<template>
  <div>
    <LegalLayout
      kicker="Terms"
      title-start="Terms of"
      title-em="use."
      lede="These Terms of Use govern access to and use of the websites, platforms, APIs, products, and services provided by Telroi. By accessing or using the Services, you agree to be bound by these Terms."
      last-updated="01 Feb 2026"
      :sections="sections"
    />

    <ClosingCta
      title-start="Questions about these Terms?"
      title-em="Reach our team."
      body="For commercial agreements, service level agreements or regulatory matters, our team is one message away."
      cta-text="support@telroi.ai"
      cta-href="mailto:support@telroi.ai"
    />
  </div>
</template>

<script setup lang="ts">
import type { LegalSection } from '~/components/LegalLayout.vue';

useHead({
  title: 'Telroi — Terms of use',
  meta: [
    {
      name: 'description',
      content:
        "Telroi's Terms of Use — governing your access to and use of our voice infrastructure services, APIs, and platforms."
    }
  ]
});

const sections: LegalSection[] = [
  {
    id: 'eligibility',
    title: 'Eligibility and authority',
    blocks: [
      {
        type: 'p',
        text: 'By using the Services, you confirm that you are at least eighteen (18) years of age and that you have the legal authority to enter into these Terms on behalf of yourself or the entity you represent. You further confirm that your use of the Services complies with all applicable laws, regulations, and telecommunications requirements.'
      }
    ]
  },
  {
    id: 'scope',
    title: 'Scope of Services',
    blocks: [
      {
        type: 'p',
        text: 'Telroi provides carrier-grade telecommunications infrastructure, including CLI-compliant international voice termination, SIP trunking, direct interconnect access, AI-native routing and optimization, voice automation, PBX functionality, and performance monitoring tools.'
      },
      {
        type: 'p',
        text: 'Certain Services may be subject to separate commercial agreements, service level agreements, pricing schedules, or regulatory requirements, which shall prevail in the event of any conflict.'
      }
    ]
  },
  {
    id: 'account',
    title: 'Account registration and access',
    blocks: [
      {
        type: 'p',
        text: 'Some Services require account registration. You agree to provide accurate and complete information and to maintain the confidentiality of your login credentials. You are responsible for all activity conducted through your account and must notify Telroi promptly if you suspect unauthorized access or misuse.'
      }
    ]
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    blocks: [
      {
        type: 'p',
        text: 'You agree to use the Services solely for lawful business purposes. You must not engage in fraudulent activity, generate artificial or manipulated traffic, falsify CLI or signaling information, violate carrier policies, infringe intellectual property or privacy rights, or use the Services in a manner that disrupts networks, enables abuse, or circumvents safeguards.'
      },
      {
        type: 'note',
        text: 'Telroi reserves the right to investigate, suspend, or terminate access where misuse is suspected.'
      }
    ]
  },
  {
    id: 'compliance',
    title: 'Regulatory compliance',
    blocks: [
      {
        type: 'p',
        text: 'Telecommunications services are subject to local and international regulations. You are solely responsible for ensuring that your use of the Services complies with all applicable licensing, telecom, consumer protection, and data protection laws in each jurisdiction where traffic is originated or terminated.'
      },
      {
        type: 'p',
        text: 'Telroi may restrict or discontinue Services where required to meet regulatory or carrier obligations.'
      }
    ]
  },
  {
    id: 'sensitive-numbers',
    title: 'Sensitive call categories and number indemnity',
    blocks: [
      {
        type: 'p',
        text: 'Certain uses of a Telroi number carry heightened regulatory, carrier and consumer-harm risk. Before we provision or enable a number for any of the categories below, you must execute a Number Use Indemnity in the form we provide. We may decline to provision, or may suspend an existing number, until it is executed.'
      },
      {
        type: 'ul',
        items: [
          'One-time passcodes, transaction alerts and any authentication or verification traffic.',
          'Banking, payments, lending, collections and other regulated financial communications.',
          'Health, insurance and other communications involving sensitive personal data.',
          'Emergency, safety, welfare or crisis-related lines.',
          'Government, public sector and electoral communications.',
          'Outbound campaigns at scale, including any automated or AI-initiated dialling.'
        ]
      },
      {
        type: 'p',
        text: 'Under the Number Use Indemnity you confirm that you hold the consents and licences required for the traffic, that the caller identity you present is one you are entitled to use, and that you will observe local rules on calling hours, opt-out and recording. You indemnify Telroi against claims, regulatory penalties, carrier charges and losses arising from your use of the number, including misuse by your own end users.'
      },
      {
        type: 'p',
        text: 'The executed document is retained by Telroi for the life of the number and for seven (7) years after it is released, and forms part of the compliance record we may be required to produce to a carrier, a regulator or a court. You will be given a copy on execution and may request a further copy at any time.'
      },
      {
        type: 'p',
        text: 'Nothing in the Number Use Indemnity transfers to Telroi any responsibility for the content, timing, targeting or lawfulness of your traffic, which remains yours.'
      }
    ]
  },
  {
    id: 'fees',
    title: 'Fees, billing, and payment',
    blocks: [
      {
        type: 'p',
        text: "Fees for the Services are determined by applicable agreements, order forms, or pricing schedules. Usage-based charges are calculated using Telroi's system records, which shall be deemed accurate unless proven otherwise."
      },
      {
        type: 'p',
        text: 'Failure to pay amounts due may result in suspension or termination of Services. All fees are exclusive of taxes unless expressly stated.'
      }
    ]
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    blocks: [
      {
        type: 'p',
        text: 'All intellectual property rights in the Services, including software, APIs, documentation, trademarks, and proprietary systems, remain the exclusive property of Telroi or its licensors.'
      },
      {
        type: 'p',
        text: 'Subject to compliance with these Terms, Telroi grants you a limited, non-exclusive, non-transferable right to access and use the Services for your internal business purposes only.'
      }
    ]
  },
  {
    id: 'data',
    title: 'Data and privacy',
    blocks: [
      {
        type: 'p',
        text: "Your use of the Services is governed by Telroi's Privacy Policy. You retain ownership of your data, while Telroi processes such data only to provide the Services, improve performance, ensure security, and comply with legal and regulatory obligations."
      }
    ]
  },
  {
    id: 'availability',
    title: 'Service availability and modifications',
    blocks: [
      {
        type: 'p',
        text: 'Telroi may modify, suspend, or discontinue any part of the Services at any time, including for maintenance, upgrades, or regulatory reasons. Unless expressly stated in a service level agreement, Telroi does not guarantee uninterrupted or error-free operation.'
      }
    ]
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    blocks: [
      {
        type: 'p',
        text: 'The Services are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, Telroi disclaims all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.'
      }
    ]
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    blocks: [
      {
        type: 'p',
        text: "To the fullest extent permitted by law, Telroi shall not be liable for any indirect, incidental, special, or consequential damages. Telroi's total aggregate liability arising out of or related to the Services shall not exceed the fees paid by you to Telroi in the three (3) months preceding the event giving rise to the claim."
      }
    ]
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    blocks: [
      {
        type: 'p',
        text: 'You agree to indemnify and hold harmless Telroi from any claims, losses, damages, or expenses arising from your use of the Services, your violation of these Terms, or your breach of applicable laws or third-party rights.'
      }
    ]
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    blocks: [
      {
        type: 'p',
        text: 'Telroi may suspend or terminate your access to the Services at any time for violation of these Terms, regulatory requirements, or non-payment. Upon termination, your right to use the Services will immediately cease.'
      }
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    blocks: [
      {
        type: 'p',
        text: 'These Terms are governed by and construed in accordance with the laws of the State of California, United States of America, without regard to conflict-of-law principles.'
      }
    ]
  },
  {
    id: 'changes',
    title: 'Changes to these Terms',
    blocks: [
      {
        type: 'p',
        text: 'Telroi may update these Terms from time to time. Continued use of the Services after changes are posted constitutes acceptance of the updated Terms.'
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      { type: 'p', text: 'If you have questions about these Terms of use, contact us at:' },
      { type: 'p', text: 'Telroi · support@telroi.ai · https://telroi.ai' }
    ]
  }
];
</script>
