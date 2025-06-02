
def clean_price(price_str):
    return int(''.join(filter(str.isdigit, price_str)))

def scrape_flipkart_products(query: str, max_price: int = None, limit=5):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://www.flipkart.com/")

        # Close login popup
        try:
            page.locator("button._2KpZ6l._2doB4z").click()
        except:
            pass

        page.fill("input[name='q']", query)
        page.keyboard.press("Enter")
        page.wait_for_selector("div._1AtVbE")

        products = []
        items = page.locator("div._1AtVbE").all()

        for item in items:
            try:
                title_el = item.locator("div._4rR01T, a.s1Q9rs").first
                if not title_el.count():
                    continue
                name = title_el.inner_text()
                link = item.locator("a").get_attribute("href")
                price_str = item.locator("div._30jeq3").inner_text()
                price_int = clean_price(price_str)

                if max_price and price_int > max_price:
                    continue

                products.append({
                    "name": name,
                    "price": price_int,
                    "link": f"https://www.flipkart.com{link}"
                })

                if len(products) >= limit:
                    break
            except Exception as e:
                print(f"Error parsing product: {e}")
                continue

        browser.close()
        return products


def scrape_flipkart_reviews(product_url: str, max_reviews: int = 20):
    # Use Playwright to go to the product_url and extract reviews
    # Example: review titles, ratings, body text
    # Return list of reviews
    return [
        {"title": "Amazing", "rating": 5, "text": "Very good performance"},
        {"title": "Not good", "rating": 2, "text": "Battery drains quickly"},
        ...
    ]
