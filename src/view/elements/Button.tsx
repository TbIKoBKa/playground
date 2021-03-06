// Core
import React, { FC, useRef, MouseEventHandler } from 'react';
import styled from 'styled-components';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Interfaces
interface ButtonProps {
    size?: 'small' | 'medium' | 'large',
    faIcon?: IconDefinition,
    onClick?: Function,
}

// Styles
const ButtonWrapper = styled.button<ButtonProps>(({ theme, size }) => ({
    position:        'relative',
    margin:          0,
    overflow:        'hidden',
    fontFamily:      'Trebuchet MS',
    backgroundColor: 'rgb(71,77,115)',
    border:          '2px outset #393e5c',
    color:           theme.font,
    cursor:          'pointer',
    borderRadius:    `${(() => {
        if (size === 'small') {
            return '2px';
        } else if (size === 'medium') {
            return '4px';
        }

        return '6px';
    })()}`,
    padding: `${ (() => {
        if (size === 'small') {
            return '4px 10px';
        } else if (size === 'medium') {
            return '6px 14px';
        }

        return '8px 24px';
    })() }`,
    fontSize: `${(() => {
        if (size === 'small') {
            return '10px';
        } else if (size === 'medium') {
            return '14px';
        }

        return '18px';
    })()}`,
    [ 'span' ]: {
        position:      'absolute',
        background:    '#fff',
        transform:     'translate(-50%, -50%)',
        pointerEvents: 'none',
        borderRadius:  '50%',
        animation:     'animate 1s ease-out',
    },
}));

export const Button: FC<ButtonProps> = ({ size = 'medium', faIcon, children, onClick }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onClickHandle: MouseEventHandler<HTMLButtonElement> & Function = (event) => {
        const target = event.target as HTMLButtonElement;
        let x = event.clientX - target.offsetLeft;
        let y = target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';

        if (buttonRef.current) {
            buttonRef.current.appendChild(ripples);
        }

        setTimeout(() => {
            ripples.remove();
        }, 1000);

        onClick && onClick();
    };

    return (
        <ButtonWrapper
            ref = { buttonRef }
            size = { size }
            onClick = { onClickHandle }>
            {faIcon && (
                <FontAwesomeIcon
                    icon = { faIcon }
                    style = {{
                        marginRight: `${children ? '8px' : '0px'}`,
                    }}
                />
            )}
            {children}
        </ButtonWrapper>
    );
};

