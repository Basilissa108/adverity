import React, {
    ReactNode,
    ReactElement,
    MouseEventHandler,
    useEffect,
    createRef,
    useRef,
    KeyboardEvent,
    MouseEvent,
} from "react";
import { cn } from "../../../utilities/shorthands";
import { Button, ButtonProps } from "../../actions/button/button";
import { ConfirmationBar } from "../../actions/confirmation-bar/confirmation-bar";
import { H1 } from "../../text/typography/typography";
import { Icon } from "../../visuals/icon/icon";
import css from "./modal.module.scss";

type ModalProps = {
    /** Title of the modal */
    title: string;
    /** Content of the modal */
    children: ReactNode;
    /** Callback for closing the modal */
    onClose: () => void;
    /** Callback for the primary action in the modal footer */
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    /** Custom label for the primary action button in the modal footer (defaults to "Submit") */
    submitButtonText?: string;
    /** Hides the cancel button in the modal footer */
    hideCancel?: boolean;
    /** Additional actions that will be displayed on the left side of the modal footer */
    additionalActions?: ReactElement<ButtonProps>[];
    /** Styles the primary action as destructive */
    destructive?: boolean;
    /** Aligns the modal content (defaults to "left") */
    align?: "left" | "center" | "right";
};

export const Modal = (props: ModalProps): JSX.Element => {
    const {
        title,
        children,
        onClose,
        onSubmit,
        submitButtonText,
        hideCancel,
        additionalActions,
        destructive,
        align = "left",
    } = props;
    const overlayRef = createRef<HTMLDivElement>();
    const modalRef = createRef<HTMLDivElement>();
    const firstRender = useRef(true);
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
        if (e.key === "Escape") handleClose();
    };
    const handleClickOutside = (e: MouseEvent<HTMLDivElement>): void => {
        if (overlayRef.current && e.target === overlayRef.current)
            handleClose();
    };
    const handleClose = () => {
        document.body.classList.remove(css.noscroll);
        onClose();
    };
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        document.body.classList.remove(css.noscroll);
        onSubmit(e);
    };

    useEffect(() => {
        if (modalRef.current && firstRender) {
            document.body.classList.add(css.noscroll);
            modalRef.current.focus();
            firstRender.current = false;
        }
    }, []);

    return (
        <div
            className={css.overlay}
            ref={overlayRef}
            onClick={handleClickOutside}
        >
            <div
                role="dialog"
                aria-label={title}
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                ref={modalRef}
                className={css.modal}
            >
                <div className={css.header}>
                    <H1>{title}</H1>
                    <Button onClick={handleClose} aria-label="Close modal">
                        <Icon>
                            <Icon.Close />
                        </Icon>
                    </Button>
                </div>
                <div className={cn(css.content, css[align])}>{children}</div>
                <div className={css.footer}>
                    <ConfirmationBar
                        onSubmit={handleSubmit}
                        submitButtonText={submitButtonText}
                        onCancel={hideCancel ? undefined : handleClose}
                        additionalActions={additionalActions}
                        destructive={destructive}
                    />
                </div>
            </div>
        </div>
    );
};
