// Core
import React, { ChangeEvent, FC, useState, useRef } from 'react';
import styled from 'styled-components';

// Elements
import { Button, Input } from '.';

// Icons
import { faFileMedical, faFolderPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Interfaces
interface FileTreeControlsProps {
    activePath: string
    onCreateFile: Function
    onCreateDirectory: Function
    isCreatingFile: boolean
    toggleCreatingFile: (value: boolean) => void
}

// Styles
const ControlsWrapper = styled.div(() => ({
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
}));

const ButtonsGroup = styled.div(() => ({
    display:                  'flex',
    justifyContent:           'end',
    [ '&:not(:last-child)' ]: {
        marginRight: '6px',
    },
    [ '& > *:first-child' ]: {
        borderTopRightRadius:   0,
        borderBottomLeftRadius: 0,
    },
    [ '& > *:last-child' ]: {
        borderTopLeftRadius:    0,
        borderBottomLeftRadius: 0,
    },
    [ '& > *:not(:first-child):not(last-child)' ]: {
        borderRadius: 0,
    },
}));

export const FileTreeControls: FC<FileTreeControlsProps> = ({
    isCreatingFile,
    activePath,
    toggleCreatingFile,
    onCreateDirectory,
    onCreateFile,
}) => {
    const [ name, setName ] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [ creatingTypeFile, setCreatingTypeFile ] = useState<'file' | 'folder' | null>(null);

    const resetInput = () => {
        setName('');
        toggleCreatingFile(false);
    };

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    return (
        <ControlsWrapper>
            {
                isCreatingFile
                    ? (
                        <Input
                            addStyle = {{ marginRight: '6px' }}
                            ref = { inputRef }
                            sizes = 'small'
                            value = { name }
                            onChange = { onChangeHandle }
                        />
                    )
                    : <p>{activePath}</p>
            }
            {
                isCreatingFile
                    ? (
                        <ButtonsGroup>
                            <Button
                                faIcon = { faCheck }
                                size = 'small'
                                onClick = { () => {
                                    if (creatingTypeFile === 'file') {
                                        onCreateFile(name);
                                    } else {
                                        onCreateDirectory(name);
                                    }

                                    resetInput();
                                } }
                            />
                            <Button
                                faIcon = { faTimes }
                                size = 'small'
                                onClick = { resetInput }
                            />
                        </ButtonsGroup>
                    )
                    : null
            }
            <ButtonsGroup>
                <Button
                    faIcon = { faFileMedical }
                    size = 'small'
                    onClick = { () => {
                        toggleCreatingFile(true);
                        setCreatingTypeFile('file');
                        inputRef.current?.focus();
                    } }
                />
                <Button
                    faIcon = { faFolderPlus }
                    size = 'small'
                    onClick = { () => {
                        toggleCreatingFile(true);
                        setCreatingTypeFile('folder');
                        inputRef.current?.focus();
                    } }
                />
            </ButtonsGroup>
        </ControlsWrapper>
    );
};

