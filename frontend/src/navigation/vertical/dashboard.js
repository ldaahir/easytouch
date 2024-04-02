export default [
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'eCommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      
      },
      {
        title: 'Erpnext',
        to: 'dashboards-erpnext',
        action:'hubi',
        subject:'check'
      },
    ],
    badgeContent: '3',
    badgeClass: 'bg-primary',
  },
]

