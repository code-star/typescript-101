// Exercise 5 - Stricter types
// The given types are very broad. Can we make them better to have more typesafety?

const CATEGORY_NEWS = "news";
const CATEGORY_GALLERY = "gallery";
const CATEGORY_CONTACT = "contact";

type Category =
  | typeof CATEGORY_NEWS
  | typeof CATEGORY_GALLERY
  | typeof CATEGORY_CONTACT;

type CategoryData = {
  id: Category;
  title: string;
  url: string;
};

type PageSettings = {
  activeCategory: Category;
  categoriesToShow: Category[];
  pageWidth: 768 | 1024;
};

let PAGE_SETTINGS: PageSettings = {
  activeCategory: CATEGORY_NEWS,
  categoriesToShow: [CATEGORY_NEWS, CATEGORY_CONTACT],
  pageWidth: 1024,
};

const getTitleForCategory = (category: Category): string => {
  if (category === CATEGORY_NEWS) {
    return "News";
  }

  if (category === CATEGORY_GALLERY) {
    return "Gallery";
  }

  if (category === CATEGORY_CONTACT) {
    return "Contact";
  }

  const exhaustive: never = category;
  throw category;
};

const getDisplayDataForCategories = (
  categories: Category[]
): CategoryData[] => {
  return categories.map((category) => ({
    id: category,
    title: getTitleForCategory(category),
    url: `https://www.mysite.com/category/${category}`,
  }));
};

const renderCategories = (categories: Category[]) => {
  const displayData = getDisplayDataForCategories(categories);

  const categoryNavigation = document.createElement("ul");
  displayData.forEach((categoryData) => {
    categoryNavigation.innerHTML += `
            <li id="${categoryData.id}">
                <a href="${categoryData.url}">${categoryData.title}</a>
            </li>`;
  });

  document.body.appendChild(categoryNavigation);
};

// we only allow our page to be 768px or 1024px wide
const updatePageSettingsWidth = (
  settings: PageSettings,
  newWidth: number
): PageSettings => {
  return {
    ...settings,
    pageWidth: newWidth < 1024 ? 768 : 1024,
  };
};

document.addEventListener("resize", () => {
  const windowWidth = document.body.clientWidth;
  PAGE_SETTINGS = updatePageSettingsWidth(PAGE_SETTINGS, windowWidth);
});
