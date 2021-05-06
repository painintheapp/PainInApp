import React from 'react'
import IntlMessages from "util/IntlMessages"
import client from 'assets/images/client.png'

const MenuList = {

    "superAdmin": [{
        "title": <IntlMessages id="leftMenu.dashboard" />,
        "url": "/dashboard",
        "icon": "dasbhoard",
        "top": '4px',
        "permissionKey": "dashboard",
        "key" : "dashboard"
    },
    {
        "title": <IntlMessages id="leftMenu.education" />,
        "url": "/education",
        "icon": "graduation",
        "top": '4px',
        "permissionKey": "education",
        "key" : "education"
    },
    {
        "title": <IntlMessages id="leftMenu.catagory" />,
        "url": "/catagory",
        "icon": "menu",
        "top": '4px',
        "permissionKey": "catagory",
        "key" : "catagory"
    },
    {
        "title": <IntlMessages id="leftMenu.specialist" />,
        "url": "/specialist",
        "icon": "avatar",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "specialist"
    },
    {
        "title": <IntlMessages id="leftMenu.community" />,
        "url": "/community",
        "icon": "family",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "community"
    },
    {
        "title": <IntlMessages id="leftMenu.polls" />,
        "url": "/polls",
        "icon": 'lising-dbrd',
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "polls"
    },
    {
        "title": <IntlMessages id="leftMenu.blog" />,
        "url": "/blog",
        "icon": "feedback",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "blog"
    },
    {
        "title": <IntlMessages id="leftMenu.users" />,
        "url": "/users",
        "icon": "user-o",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "users"
    },
    
    {
        "title": <IntlMessages id="leftMenu.setting" />,
        "url": "/settings",
        "icon": "setting",
        "top": '4px',
        "permissionKey": "tasks",
        "key" : "setting"
    },

    ],
    "highSuperAdmin": [{
        "title": <IntlMessages id="leftMenu.dashboard" />,
        "url": "/superAdmin",
        "icon": "dasbhoard",
        "top": '4px',
        "permissionKey": "dashboard",
        "key" : "dashboard"
    },
    {
        "title": <IntlMessages id="leftMenu.education" />,
        "url": "/education",
        "icon": "graduation",
        "top": '4px',
        "permissionKey": "education",
        "key" : "education"
    },
    {
        "title": <IntlMessages id="leftMenu.catagory" />,
        "url": "/catagory",
        "icon": "menu",
        "top": '4px',
        "permissionKey": "catagory",
        "key" : "catagory"
    },
    {
        "title": <IntlMessages id="leftMenu.specialist" />,
        "url": "/specialist",
        "icon": "avatar",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "specialist"
    },
    {
        "title": <IntlMessages id="leftMenu.community" />,
        "url": "/community",
        "icon": "family",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "community"
    },
    {
        "title": <IntlMessages id="leftMenu.polls" />,
        "url": "/polls",
        "icon": 'lising-dbrd',
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "polls"
    },
    {
        "title": <IntlMessages id="leftMenu.blog" />,
        "url": "/blog",
        "icon": "feedback",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "blog"
    },
    {
        "title": <IntlMessages id="leftMenu.users" />,
        "url": "/users",
        "icon": "user-o",
        "top": '4px',
        "permissionKey": "inspector",
        "key" : "users"
    },
    
    {
        "title": <IntlMessages id="leftMenu.setting" />,
        "url": "/settings",
        "icon": "setting",
        "top": '4px',
        "permissionKey": "tasks",
        "key" : "setting"
    },
    {
        "title": "Exercise",
        "url": "/exercise",
        "icon": "auth-screen",
        "keyTitle": "exercise",
        "permissionKey":"exercise",
        "subMenu": [{
            "title": "Category",
            "url": "/exercise/category",
            "icon": "",
            "key": "exercise/category",
        },
        {
            "title": "Exercises",
            "url": "/exercise/exercises",
            "icon": "",
            "key": "exercise/exercises",
        }
        ]
    },
    {
        "title": 'Symptom',
        "url": "/symptoms",
        "icon": "icon",
        "top": '4px',
        "permissionKey": "symptoms",
        "key" : "symptoms"
    },
    {
        "title": 'Condition',
        "url": "/conditions",
        "icon": "culture-calendar",
        "top": '4px',
        "permissionKey": "conditions",
        "key" : "conditions"
    },
    {
        "title": 'Supplement',
        "url": "/supplement",
        "icon": "noodles",
        "top": '4px',
        "permissionKey": "supplement",
        "key" : "supplement"
    },
    {
        "title": 'Vitamins',
        "url": "/vitamins",
        "icon": "orders",
        "top": '4px',
        "permissionKey": "vitamins",
        "key" : "vitamins"
    },
    {
        "title": "Health Care",
        "url": "/healthCare",
        "icon": "auth-screen",
        "keyTitle": "exercise",
        "permissionKey":"exercise",
        "subMenu": [{
            "title": "Category",
            "url": "/healthCare/category",
            "icon": "",
            "key": "healthCare/category",
        },
        {
            "title": "Occupation",
            "url": "/healthCare/occupation",
            "icon": "",
            "key": "healthCare/occupation",
        }
        ]
    },
    ]

}

export default MenuList;