import { BlockStack, Box, Card, Frame, Page, Text } from '@shopify/polaris'
import { useCallback, useRef, useState } from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { AnnotatedSectionExample } from '../examples/AnnotatedSectionExample'
import { logo } from '../examples/Logo'
import { ModalExample } from '../examples/ModalExample'
import { NavigationExample } from '../examples/NavigationExample'
import { ResourceList2Example } from '../examples/ResourceList2Example'
import { ResourceListExample } from '../examples/ResourceListExample'
import { SheetExample } from '../examples/SheetExample'
import { TopBarExample } from '../examples/TopBarExample'

export const Route = createFileRoute('/examples')({
  component: RouteComponent,
})

function RouteComponent() {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const skipToContentRef = useRef<HTMLAnchorElement>(null)
  const navigationButtonRef = useRef<HTMLButtonElement>(null)

  const toggleMobileNavigationActive = useCallback(() => {
    setMobileNavigationActive(mobileNavigationActive => !mobileNavigationActive)
    if (mobileNavigationActive && navigationButtonRef.current) {
      navigationButtonRef.current.focus()
    }
  }, [mobileNavigationActive])

  return (
    <Frame
      logo={logo}
      topBar={<TopBarExample onNavigationToggle={toggleMobileNavigationActive} />}
      navigation={<NavigationExample />}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      // skipToContentTarget={skipToContentRef}
    >
      <a ref={skipToContentRef} href="#main" style={{ display: 'none' }}>
        Skip to content
      </a>
      <Page title="Account connection" fullWidth={false}>
        <AnnotatedSectionExample />
        <BlockStack gap="500">
          {/* <AccountConnectionExample /> */}

          {/* <CalloutCardExample />
          <MediaCardExample /> */}

          <Card>
            <ModalExample />
          </Card>

          <SheetExample />

          <Card>
            <ResourceList2Example />
          </Card>

          <BlockStack gap="400">
            <Text variant="headingLg" as="h2">
              Blog posts
            </Text>
            <Card>
              <ResourceListExample />
            </Card>
          </BlockStack>
          <Box paddingBlockEnd="500"></Box>
        </BlockStack>
      </Page>
    </Frame>
  )
}
