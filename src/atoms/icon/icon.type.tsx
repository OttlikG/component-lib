
export const iconValues = {
    'activity': '\\e900',
    'chevron-right': '\\e930',
    'x': '\\ea12',
    'globe': '\\e978',
    'search': '\\e9cc'
} as IconValuesTypes

type IconValuesTypes = {
    [index: string]: string
}

export interface IconProps {
    iconName: 'activity' | 'chevron-right' | string
}