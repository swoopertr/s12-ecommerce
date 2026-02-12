/* HTML için PremiumEssentials.txt */

const products = [
    {
        id: 1,
        title: "Signature Bomber Jacket",
        category: "Outerwear • Obsidian Grey",
        price: 249,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2C5H7Z6e8AesDoh2qcmZxOHgERsJEs0nGyBcjXYqmKI1LP943NK7lOwBqUK0646srOec3TnKhYseMzaLRzbSn2-VSuja2gVSNCSeJre9-OiewtImVcIWpOX6ys9v46B1_U71qCL5HS1kRZXwjvNSbVdTrRbr3iRL3AlXiw_iRhaoAuHl33x6ngSrMs75tUYbrKIncNNQOoVI8rBCZBsqNWoR4TfVrU6rTzD14PPv6jyNs7oghSSvd92Vx7Tf3QLZ5-wh2RTxvA0Q"
    },

    {
        id: 2,
        title: "Velocity Pro Sneakers",
        category: "Footwear • Crimson Core",
        price: 185,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5aVP00E-COGlGLJ02wQBhSw6YPpvAL2ZuUEVAYdLmJvdeN4X6ZeF4fZhPxoFcjNqtsctd037BsuujBtcUqOvRCBiE5HHfpfB7lEpwhZNCcLzbRDOO9rNnGitAwQn4BJjBcZ41pKqfKZBwOn9ej_PJWZQkulzlKFDxi1d0R5ooIS-ttIBCVr8U7ukRo2-CcLuvsPDh5_fYFb8IiDnvBV46QOHnMfwXTdT59diUXXQ7vQ1WL0oeFyGPOzCGZiS8iRjbEsm8uzpMnGI"
    },
    {
        id: 3,
        title: "Everyday Heavy Tee",
        category: "Apparel • Midnight",
        price: 65,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1DUzKDFqx1AjDKAspUgmiwoSAV-PX9RTf9nnhdfWFVFkvSQ2cXfr2pMLt_gv8uLm8fwsY1RwuUyNYk-HYn8z7Cyze9jLNtGsC6zndNkuXRCBzONSbV9j0a9aPuamJWzjfFOe6tQWTASLDh-X3WsjLal1JDhaPbVqclXbDagwJVHwRPNtRyO3S-uQ6lHvcoPIJP6-0-R_EC2JFirwg5-AcP24P8pBEoezOfRI3cHjuubUgaVnPcIb_GzeW472tJkIaJin_oapVJ6s"
    },
    {
        id: 4,
        title: "Horizon Chronograph",
        category: "Accessories • Silver Steel",
        price: 450,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8tZrzV4crTYFd5ql-T-sXp1UFCsfoYqSVPWhmoBZ4m9teOuYhY4NE634YaoqKUNt-dVaahYKtjeI_E58uVe26vGvkI4gvMSQoay-wc_ba6s3rmgp5a9EuG4Sz_Sv3lyECinANoXSzdrxO_36MM7GCpm7smv5NoWfPnl7Hy-qGjWBWdotEjJ_Rt2ixQoyAktvpSD4bqdr_SnwFFhyhGnLfmBZes_LTCSjrQFZR2WrYhozqhrWsc8zI2ce-y7g-Bhdu0EW79OcrMo"
    },
    {
        id: 5,
        title: "Nomad Leather Pack",
        category: "Bags • Sandstone",
        price: 320,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3SqYEp5CxYg9tIo4hNqacj8uGH6Fz-_CyGN3mhR7tBCICIReoME4cCb63wh9Sntcqu7WSCzdrNQxtY6tjr8nBEgC8SQw_X0y_I2xzSaOVTiHwlaermn2pllDcQli-mKHs4qepkN0q9CTej__7S-H_i8zyVgTrIr7F_lxbeR_5xhXurbBThiCWVqPZoAQsmzc99CY6PTrWT6KP8LdYwqNESsnqcKmRB03T93omNn3SBMPWeecTEzwruv6oDdC_IjupnUtQiuqTfMM"
    },
    {
        id: 6,
        title: "Aura Noise-Canceling",
        category: "Audio • Matte Black",
        price: 349,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIXjhGL5ZfCcQdQAFvSiSqhjY8jOxKQlkwmCxKoQxJnIkUYUV7mzjf9urnoalVnQYrKOl4oqiGWYnDSMGbCkQowFuaDHUn3hcjVnKW4Ul0W3TbBkMxvys1kXqHmairj1Ohat_dYbz0sNALzanzmX7_lznlGav-gGYYbR5O6WL3oLCO79tUQKQ5vl5CzAihFOCV4v5wjZRz61C5IHg9-_uoYisFuWTYUIwNNjCEPwyhf4pa3-wxs_VYy5eQkC3ufCENDVETkNQQecE"
    },
    {
        id: 7,
        title: "Signature Bomber Jacket",
        category: "Outerwear • Obsidian Grey",
        price: 249,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2C5H7Z6e8AesDoh2qcmZxOHgERsJEs0nGyBcjXYqmKI1LP943NK7lOwBqUK0646srOec3TnKhYseMzaLRzbSn2-VSuja2gVSNCSeJre9-OiewtImVcIWpOX6ys9v46B1_U71qCL5HS1kRZXwjvNSbVdTrRbr3iRL3AlXiw_iRhaoAuHl33x6ngSrMs75tUYbrKIncNNQOoVI8rBCZBsqNWoR4TfVrU6rTzD14PPv6jyNs7oghSSvd92Vx7Tf3QLZ5-wh2RTxvA0Q"
    },

    {
        id: 8,
        title: "Velocity Pro Sneakers",
        category: "Footwear • Crimson Core",
        price: 185,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5aVP00E-COGlGLJ02wQBhSw6YPpvAL2ZuUEVAYdLmJvdeN4X6ZeF4fZhPxoFcjNqtsctd037BsuujBtcUqOvRCBiE5HHfpfB7lEpwhZNCcLzbRDOO9rNnGitAwQn4BJjBcZ41pKqfKZBwOn9ej_PJWZQkulzlKFDxi1d0R5ooIS-ttIBCVr8U7ukRo2-CcLuvsPDh5_fYFb8IiDnvBV46QOHnMfwXTdT59diUXXQ7vQ1WL0oeFyGPOzCGZiS8iRjbEsm8uzpMnGI"
    },
    {
        id: 9,
        title: "Everyday Heavy Tee",
        category: "Apparel • Midnight",
        price: 65,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1DUzKDFqx1AjDKAspUgmiwoSAV-PX9RTf9nnhdfWFVFkvSQ2cXfr2pMLt_gv8uLm8fwsY1RwuUyNYk-HYn8z7Cyze9jLNtGsC6zndNkuXRCBzONSbV9j0a9aPuamJWzjfFOe6tQWTASLDh-X3WsjLal1JDhaPbVqclXbDagwJVHwRPNtRyO3S-uQ6lHvcoPIJP6-0-R_EC2JFirwg5-AcP24P8pBEoezOfRI3cHjuubUgaVnPcIb_GzeW472tJkIaJin_oapVJ6s"
    },
    {
        id: 10,
        title: "Horizon Chronograph",
        category: "Accessories • Silver Steel",
        price: 450,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8tZrzV4crTYFd5ql-T-sXp1UFCsfoYqSVPWhmoBZ4m9teOuYhY4NE634YaoqKUNt-dVaahYKtjeI_E58uVe26vGvkI4gvMSQoay-wc_ba6s3rmgp5a9EuG4Sz_Sv3lyECinANoXSzdrxO_36MM7GCpm7smv5NoWfPnl7Hy-qGjWBWdotEjJ_Rt2ixQoyAktvpSD4bqdr_SnwFFhyhGnLfmBZes_LTCSjrQFZR2WrYhozqhrWsc8zI2ce-y7g-Bhdu0EW79OcrMo"
    },
    {
        id: 11,
        title: "Nomad Leather Pack",
        category: "Bags • Sandstone",
        price: 320,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3SqYEp5CxYg9tIo4hNqacj8uGH6Fz-_CyGN3mhR7tBCICIReoME4cCb63wh9Sntcqu7WSCzdrNQxtY6tjr8nBEgC8SQw_X0y_I2xzSaOVTiHwlaermn2pllDcQli-mKHs4qepkN0q9CTej__7S-H_i8zyVgTrIr7F_lxbeR_5xhXurbBThiCWVqPZoAQsmzc99CY6PTrWT6KP8LdYwqNESsnqcKmRB03T93omNn3SBMPWeecTEzwruv6oDdC_IjupnUtQiuqTfMM"
    },
    {
        id: 12,
        title: "Aura Noise-Canceling",
        category: "Audio • Matte Black",
        price: 349,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIXjhGL5ZfCcQdQAFvSiSqhjY8jOxKQlkwmCxKoQxJnIkUYUV7mzjf9urnoalVnQYrKOl4oqiGWYnDSMGbCkQowFuaDHUn3hcjVnKW4Ul0W3TbBkMxvys1kXqHmairj1Ohat_dYbz0sNALzanzmX7_lznlGav-gGYYbR5O6WL3oLCO79tUQKQ5vl5CzAihFOCV4v5wjZRz61C5IHg9-_uoYisFuWTYUIwNNjCEPwyhf4pa3-wxs_VYy5eQkC3ufCENDVETkNQQecE"
    },

]

export default products;

