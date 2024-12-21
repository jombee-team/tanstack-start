import { Navigation } from '@shopify/polaris'
import { ChevronRightIcon, HomeIcon, OrderIcon, PlusIcon, ProductIcon, SettingsIcon } from '@shopify/polaris-icons'

export function NavigationExample() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '#',
            label: 'Home',
            icon: HomeIcon,
            selected: true,
          },
          {
            url: '#',
            label: 'Orders',
            icon: OrderIcon,
            badge: '15',
            selected: false,
          },
          {
            url: '#',
            label: 'Products',
            icon: ProductIcon,
            selected: false,
          },
        ]}
      />

      <Navigation.Section
        title="Sales channels"
        action={{
          icon: PlusIcon,
          tooltip: {
            content: 'Add sales channel',
          },
          accessibilityLabel: 'Add sales channel',
          onClick: () => console.log('Add sales channel'),
        }}
        items={[
          {
            url: '#',
            label: 'Point of Sale',
            selected: false,
          },
          {
            url: '#',
            label: 'Online Store',
            selected: false,
          },
          {
            url: '#',
            label: 'Facebook',
            selected: false,
          },
          {
            url: '#',
            label: 'Instagram',
            selected: false,
          },
        ]}
      />

      <Navigation.Section
        title="Apps"
        action={{
          icon: ChevronRightIcon,
          accessibilityLabel: 'Add app',
          onClick: () => console.log('Add app'),
        }}
        items={[
          {
            url: '#',
            label: 'Installed apps',
            selected: false,
          },
          {
            url: '#',
            label: 'App store',
            selected: false,
          },
        ]}
      />

      <Navigation.Section
        separator
        items={[
          {
            url: '#',
            label: 'Settings',
            icon: SettingsIcon,
            selected: false,
          },
        ]}
      />

      {/* <Sticky>
        <Button>Add app</Button>
      </Sticky> */}
    </Navigation>
  )
}
