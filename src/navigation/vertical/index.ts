// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
        {
          title: 'ダッシュボード',
          path: '/dashboards/analytics'
        },
        {
          title: '記事',
          path: '/ui/cards/basic'
        },
  ]
}

export default navigation
