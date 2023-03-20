// src/components/DynamicTable.stories.js
import React from 'react';
import { Meta } from '@storybook/react';
import DynamicTable from './DynamicTable';

export default {
    title: 'Components/DynamicTable',
    component: DynamicTable,
    argTypes: {
        headers: {
            control: false,
        },
        rows: {
            control: 'number',
            defaultValue: 10,
        },
        columns: {
            control: 'number',
            defaultValue: 3,
        },
    },
};

const numberToOrdinal = (num) => {
    const ordinales = [
        'Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta',
        'Séptima', 'Octava', 'Novena', 'Décima', 'Undécima', 'Duodécima',
        'Decimotercera', 'Decimocuarta', 'Decimoquinta', 'Decimosexta',
        'Decimoséptima', 'Decimooctava', 'Decimonovena', 'Vigésima', 'Vigésimaprimera',
        'Vigésimasegunda', 'Vigésimatercera', 'Vigésimacuarta', 'Vigésimaquinta', 'Vigésimasexta',
    ];
    return ordinales[num - 1] || `Columna ${num}`;
};

const Template = (args) => {
    const headers = Array.from({ length: args.columns }, (_, i) => {
        const index = i + 1;
        const columnName = String.fromCharCode(64 + index);
    return `${numberToOrdinal(index)} Columna ${columnName}`;
    });
    return <DynamicTable {...args} headers={headers} />;
};

export const Default = Template.bind({});
Default.args = {};

export const NineXFive = Template.bind({});
NineXFive.args = {
    rows: 9,
    columns: 5,
};
