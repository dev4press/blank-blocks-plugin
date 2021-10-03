import {registerBlockType} from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import Save from './save';
import Icons from "../../helpers/icons";

registerBlockType('millan-dev/blank-block', {
    apiVersion: 2,
    name: 'millan-dev/blank-block',
    title: __('Blank Block', 'alpha-blocks'),
    description: __('Simple blank block', 'alpha-blocks'),
    category: 'widgets',
    icon: Icons.icon,
    supports: {},
    attributes: {},
    edit: Edit,
    save: Save,
});
