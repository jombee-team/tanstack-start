import './AnnotatedSectionExample.css'

import {
  Avatar,
  BlockStack,
  Button,
  Card,
  Divider,
  FormLayout,
  InlineStack,
  Layout,
  Link,
  Text,
  TextField,
} from '@shopify/polaris'

import { Box } from '@shopify/polaris'

export function AnnotatedSectionExample() {
  return (
    <Box paddingBlockEnd="500">
      <Layout>
        {/* <Layout> */}
        <Layout.AnnotatedSection
          title="Profile"
          description="This information will be displayed publicly so be careful what you share."
        >
          <Card padding={'500'}>
            <BlockStack gap="400" align="start">
              <InlineStack gap="400" align="space-between">
                <InlineStack gap="400">
                  <div className="avatar-container">
                    <Avatar
                      name="Rob Taylor"
                      initials="RT"
                      source="https://shopify-assets.shopifycdn.com/accounts/production/account/avatar/955e795b-0d39-47fe-88cd-cfda374a4d12/avatar_250x250_crop_center.jpeg?v=1734125084"
                    />
                  </div>
                  <BlockStack gap="100">
                    <Text as="h3" variant="headingLg">
                      Rob Taylor
                    </Text>
                    <Text as="p" variant="bodyLg" tone="subdued">
                      <Link url="mailto:rob@jombee.io">rob@jombee.io</Link>
                    </Text>
                    <Text as="p" variant="bodyLg" tone="subdued">
                      English
                    </Text>
                    <Text as="p" variant="bodyLg" tone="subdued">
                      Last login about 18 hours ago
                    </Text>
                  </BlockStack>
                </InlineStack>

                <BlockStack>
                  <Button url="#">Edit personal profile</Button>
                </BlockStack>
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection id="businessDetails" title="Business details">
          <Card>
            <FormLayout>
              <TextField label="Store name" onChange={() => {}} autoComplete="off" />
              <TextField type="email" label="Account email" onChange={() => {}} autoComplete="email" />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.Section variant="fullWidth">
          <Divider borderColor="border" />
        </Layout.Section>

        <Layout.AnnotatedSection
          id="contactInformation"
          title="Contact information"
          description="We'll use this information to contact you about your account."
        >
          <Card>
            <FormLayout>
              <TextField label="Store name" onChange={() => {}} autoComplete="off" />
              <TextField type="email" label="Account email" onChange={() => {}} autoComplete="email" />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Box>
  )
}
