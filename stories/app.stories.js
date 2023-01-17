import React from 'react'

import App from '../app/components/app'

export default {
    title: 'App',
    component: App,
    argTypes: {},
}
if (!global.logger) global.logger = console
const Template = args => <App {...args} />

export const Home = Template.bind({})
Home.args = {
    iota: {
        _id: {
            $oid: '600610cd63b01a0854ddf1b3',
        },
        path: '/home',
        subject: 'Civil Server Template',
        description: 'Civil Server Template Home Page',
        webComponent: 'Home',
    },
}

export const NothingHere = Template.bind({})
NothingHere.args = {}
