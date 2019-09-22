// Exercise 6 - Stricter types
// The given types are very broad. Can we make them better to have more typesafety?

type PageSettings = {
    activeCategory: string
    categoriesToShow: string[]
    pageWidth: number
}

let PAGE_SETTINGS: PageSettings = {
    activeCategory: 'news',
    categoriesToShow: ['news', 'contact'],
    pageWidth: 1024
}

// we only expect three types of categories here:
// news, gallery, contact
const getTitleForCategory = (category: string): string => {
    if (category === 'news') {
        return 'News'
    }
    
    if (category === 'gallery') {
        return 'Gallery'
    }
    
    if (category === 'contact') {
        return 'Contact'
    }

    // this code should not be executed
    return 'Other'
}

const getDisplayDataForCatagories = (categories: string[]) => {
    return categories.map(category => ({
        id: category,
        title: getTitleForCategory(category),
        url: `https://www.mysite.com/category/${category}`
    }))
}

const renderCategories = (categories: string[]) => {
    const displayData = getDisplayDataForCatagories(categories)

    const categoryNavigation = document.createElement('ul')
    displayData.forEach(categoryData => {
        categoryNavigation.innerHTML += `
            <li id="${categoryData.id}">
                <a href="${categoryData.url}">${categoryData.title}</a>
            </li>`
    })

    document.body.appendChild(categoryNavigation)
}

// we only allow our page to be 768px or 1024px wide
const updatePageSettingsWidth = (settings: PageSettings, newWidth: number): PageSettings => {
    return {
        ...settings,
        pageWidth: newWidth < 1024 ? 768 : 1024
    }
}

document.addEventListener('resize', () => {
    const windowWidth = document.body.clientWidth
    PAGE_SETTINGS = updatePageSettingsWidth(PAGE_SETTINGS, windowWidth)
})
