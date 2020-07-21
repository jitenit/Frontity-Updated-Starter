const settings = {
  "name": "CygnetGSP - Uptodate Blog",
  "state": {
    "frontity": {
      "url": "https://www.cygnetgsp.in",
      "title": "CygnetGSP",
      "description": "A NextJs clone of CygnetGSP"
    }
  },
  "packages": [
    {
      "name": "@frontity/codenawis",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "ASP SOLUTIONS",
              "/category/asp-solution/"
            ],
            [
              "GST",
              "/category/gst/"
            ],
            [
              "GST GUIDE",
              "/category/gst-guide/"
            ],
             [
              "GST Notification",
              "/category/gst-notifications/"
            ],
             [
              "Vendor Management",
              "/category/vendor-management/"
            ],
            [
              "E-way Bill Solution",
              "/category/e-way-bill-solution/"
            ],
             [
              "Company",
              "/category/company/"
            ],
            [
              "About",
              "/about-us/"
            ],
            [
              "Back to Main Website",
              "https://www.cygnetgsp.in/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.cygnetgsp.in/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
