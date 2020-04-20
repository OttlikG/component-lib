
export const iconValues = {
    'activity': '\\e900',
    'chevron-right': '\\e930',
    'x': '\\ea12'
} as IconValuesTypes

type IconValuesTypes = {
    [index: string]: string
}

export interface IconProps {
    iconName: 'activity' | 'chevron-right' | string
}