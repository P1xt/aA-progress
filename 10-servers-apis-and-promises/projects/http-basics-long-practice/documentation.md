============================================
============================================
### Ask for the Home Page

Predicted Request components:
- Method: GET
- URL: /
- Headers: none
- Body: none

Predicted Response components:
- Status Code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page with navigation links to other pages

 
=============================================
=============================================

### Ask for a page that doesn't exist

Request components:
- Method: GET
- URL: /badlink
- Headers: none
- Body: none

Response components:
- Status code: 404
- Headers: 
  - Content-Type: text/html
- Body: 404 - Page Not Found

### Ask for the products list page

Request components:
- Method: GET
- URL: /products
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: h1 header with text "Products List" followed by unordered list of products

### Ask for the product detail page

Here's an example product on the server:

| detail      | value                                                      |
| ----------- | ---------------------------------------------------------- |
| productId   | 1                                                          |
| name        | "Facial Cleansing Brush"                                   |
| description | "Reaches deep pores to cleanse oil, dirt, and blackheads." |
| price       | 23.99                                                      |
| categories  | "beauty", "electronics"                                    |

Request components:
- Method: GET
- URL: /products/1
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers: 
  - Content-Type: text/html
- Body:  Details about the Facial Cleansing Brush

### Ask for the create new product page

Request components:
- Method: GET
- URL: /products/new
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers: 
  - Content-Type: text/html
- Body: HTML for a form, the submission of which will create a new product

### Submit a new product

Remember, for a traditional HTML web server, whenever a successful `POST`
request is sent to the server, the server should respond with a redirection to
a page.

After successful submission, user should be looking at the product detail page.

Here are the categories on the server:

| tag         | name           |
| ----------- | -------------- |
| grocery     | Grocery        |
| electronics | Electronics    |
| beauty      | Beauty         |
| toys-games  | Toys and Games |
| health      | Health         |
| furniture   | Furniture      |
| clothing    | Clothing       |

* Note: In Chome dev tools, if the "body" of a request exists, it will appear 
in the network tab as "payload".

Request components:
- Method: POST
- URL: /products
- Headers: 
 - Content-Type: application/x-www-form-urlencoded
- Body: form data

Response components:
- Status code: 302 (redirect)
- Headers: 
  - Content-Type: text/html
- Body: HTML for the newly created product

### Ask for the edit product page

Request components:
- Method: GET
- URL: /products/2/edit
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers: 
  - Content-Type: text/html
- Body: HTML Form for editing the product

### Submit an edit for an existing product

After successful submission, user should be looking at the product detail page.

Request components:
- Method: POST
- URL: /products/2
- Headers: 
  - Content-Type: application/x-www-form-urlencoded
- Body: Form data

Response components:
- Status code: 302
- Headers:
  - Content-Type: text/html
- Body: HTML for the product detail page

### Submit a delete for an existing product

After successful submission, user should be looking at the products list page.

Request components:
- Method: POST
- URL: /products/2/delete
- Headers: 
  - Content-Type: application/x-www-form-urlencoded
- Body: none

Response components:
- Status code: 302 (redirect to products list)
- Headers:
  - Content-Type: text/html
- Body: HTML for products list page

### Submit a new review for a product

After successful submission, user should be looking at the product detail page.

Here's an example review on the server:

| detail     | value                  |
| ---------- | ---------------------- |
| reviewId   | 1                      |
| comment    | "I love this product!" |
| starRating | 5                      |
| productId  | 1                      |

Request components:
- Method: POST
- URL: /products/1/reviews
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: form data

Response components:
- Status code: 302 (redirect to product page)
- Headers: 
  - Content-Type: text/html
- Body: HTML for the product detail page

### Ask for the edit review page for a product

Request components:
- Method: GET
- URL: /reviews/1/edit
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML for the Edit Review page

### Submit an edit for an existing review

After successful submission, user should be looking at the product detail page.

Request components:
- Method: POST
- URL: 	/reviews/1
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: form data

Response components:
- Status code: 302 (redirected)
- Headers: 
  - Content-Type: application/x-www-form-urlencoded
- Body: HTML for product detail page

### Submit a delete for an existing review

After successful submission, user should be looking at the product detail page.

Request components:
- Method: POST
- URL: /reviews/1/delete
- Headers: 
  - Content-Type: application/x-www-form-urlencoded
- Body: form data

Response components:
- Status code: 302 (redirected)
- Headers: 
  - Content-Type: text/html
- Body: HTML for the product detail page

### Ask for all the products in a particular category by tag of the category

Request components:
- Method: GET
- URL: /categories/grocery/products
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: product list page

### Ask for the best-selling product

Look for clues in the HTML pages from the prior responses for what the route should be.

Request components:
- Method: GET
- URL: /products/best-selling
- Headers: none
- Body: none

Response components:
- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: product detail page for the best selling product