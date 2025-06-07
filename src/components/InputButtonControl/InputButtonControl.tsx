import React from "react"
import { observer } from "mobx-react-lite"
import { ButtonConfig, InputButtonControlProps } from "./InputButtonControl.types"
import { Button, Input, Flex} from "../shared"
import { useInputButtonControl } from "./useInputButtonControl"

export const InputButtonControl = observer(
    ({ initialValue, buttons }: InputButtonControlProps) => {
        const { value, onChange } = useInputButtonControl(initialValue ?? '')

        const leftButtons = buttons?.filter(btn => btn.position === 'left')
        const rightButtons = buttons?.filter(btn => btn.position === 'right')

        const renderButtons = (
            buttons: ButtonConfig[]
        ): React.ReactNode => {
            if (!buttons?.length) return null
            return buttons?.map((btn, i) => (
                <Button
                    key={btn.position + i}
                    onClick={() => btn.callback(value, onChange)}
                >
                    {btn.text}
                </Button>
            ))
        }

        return (
            <Flex $gap={8} $align={'flex-end'} $fullWidth>
                {leftButtons?.length ?
                    <Flex $gap={4}>
                        {renderButtons(leftButtons)}    
                    </Flex>
                    : null
                }

                <Input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Контролирую кнопки"

                />

                {rightButtons?.length ?
                    <Flex $gap={4}>{renderButtons(rightButtons)}</Flex>
                    : null
                }
            </Flex>
        )
    }
)