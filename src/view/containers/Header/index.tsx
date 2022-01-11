// Core
import React, { FC } from 'react';

// Elements
import { Label, Button } from '../../elements';

// Styles
import { Container, ContainerItem } from './styles';

// Interfaces
interface HeaderProps {
    setAuthModalVisible: (value: boolean) => void
}

export const Header: FC<HeaderProps> = ({ setAuthModalVisible }) => {
    return (
        <Container>
            <ContainerItem />
            <ContainerItem>
                <Label fontSize = { 36 }>Playground</Label>
            </ContainerItem>
            <ContainerItem>
                <Button
                    addStyle = {{
                        display:      'flex',
                        alignItems:   'center',
                        border:       0,
                        borderRadius: '12px',
                    }}
                    size = 'large'
                    onClick = { () => setAuthModalVisible(true) }>
                    <svg
                        fill = '#f1f2f3'
                        height = { 32 }
                        viewBox = '0 0 256 256'
                        width = { 32 }>
                        <g
                            transform = 'translate(128 128) scale(0.72 0.72)'>
                            <g
                                transform = 'translate(-175.05 -175.05000000000004) scale(3.89 3.89)' >
                                <path
                                    d = 'M 79.635 73.696 C 86.104 65.901 90 55.898 90 45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 c 0 10.898 3.896 20.901 10.365 28.696 c 0.105 0.161 0.227 0.315 0.383 0.445 c 0.002 0.002 0.005 0.003 0.007 0.005 C 19.015 83.837 31.298 90 45 90 c 13.702 0 25.985 -6.163 34.245 -15.854 c 0.003 -0.002 0.005 -0.003 0.008 -0.005 C 79.408 74.01 79.53 73.857 79.635 73.696 z M 45 4 c 22.607 0 41 18.393 41 41 c 0 9.169 -3.026 17.645 -8.132 24.482 c -6.081 -6.505 -13.876 -10.99 -22.402 -13.023 c 6.497 -3.669 10.901 -10.629 10.901 -18.609 c 0 -11.782 -9.585 -21.367 -21.367 -21.367 c -11.782 0 -21.367 9.585 -21.367 21.367 c 0 7.979 4.404 14.939 10.901 18.608 c -8.526 2.033 -16.321 6.518 -22.402 13.023 C 7.026 62.645 4 54.169 4 45 C 4 22.393 22.393 4 45 4 z M 45 55.217 c -9.576 0 -17.367 -7.791 -17.367 -17.367 S 35.424 20.482 45 20.482 s 17.367 7.791 17.367 17.367 S 54.576 55.217 45 55.217 z M 45 86 c -11.986 0 -22.787 -5.171 -30.29 -13.399 C 22.48 64.079 33.418 59.217 45 59.217 c 11.581 0 22.52 4.863 30.29 13.384 C 67.787 80.829 56.986 86 45 86 z'
                                    strokeLinecap = 'round'
                                    transform = ' matrix(1 0 0 1 0 0) '
                                />
                            </g>
                        </g>
                    </svg>
                    <p style = {{ display: 'inline-block', marginLeft: '6px', fontSize: '18px' }}>Login</p>
                </Button>
            </ContainerItem>
        </Container>
    );
};
