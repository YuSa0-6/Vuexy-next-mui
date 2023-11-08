// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'Basic',
          path: '/ui/cards/basic'
        },
  ]
}

export default navigation
