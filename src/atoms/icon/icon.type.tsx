
export const iconValues = {
    'activity': '\\e900',
    'chevron-right': '\\e930',
    'x': '\\ea12',
    'globe': '\\e978',
    'search': '\\e9cc',
    'clock': '\\e939'
} as IconValuesTypes

type IconValuesTypes = {
    [index: string]: string
}

export interface IconIProps {
    iconName: 'activity' | 'chevron-right' | string,
    onClick: any
}
export interface IconProps {
    iconName: 'activity' | 'chevron-right' | string,
    onClickHandler?: Function
}