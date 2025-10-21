import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  return (
    <div>
      {/* Search section */}
      <SearchSection />
      {/* template section */}
      <TemplateListSection />
    </div>
  )
}

export default Dashboard
