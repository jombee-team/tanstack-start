import { Avatar, BlockStack, Box, Button, Card, Layout, Text } from '@shopify/polaris'

export function ProfileCardExample() {
  return (
    <Layout>
      <Layout.AnnotatedSection
        title="Profile"
        description="This information will be displayed publicly so be careful what you share."
      >
        <Card>
          <BlockStack gap="400" align="start">
            <Avatar
              size="lg"
              name="Rob Taylor"
              source="https://shopify-assets.shopifycdn.com/accounts/production/account/avatar/955e795b-0d39-47fe-88cd-cfda374a4d12/avatar_250x250_crop_center.jpeg?v=1734125084"
            />

            <BlockStack gap="100">
              <Text as="h3" variant="headingMd">
                Rob Taylor
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                <a href="mailto:rob@jombee.io">rob@jombee.io</a>
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                English
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                Last login about 18 hours ago
              </Text>
            </BlockStack>

            <Box>
              <Button url="/4031933/account?return_to=https%3A%2F%2Fpartners.shopify.com%2F4031933%2Fsettings">
                Edit personal profile
              </Button>
            </Box>
          </BlockStack>
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
  )
}
