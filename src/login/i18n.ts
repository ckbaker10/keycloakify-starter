import { createUseI18n } from "keycloakify/login";

export const { useI18n, ofTypeI18n } = createUseI18n({
    en: {
        doResend: "Resend Email",
        emailOtpHelp: "Please insert the access code you will receive via email"
    },
    de: {
        doResend: "Email erneut zusenden",
        emailOtpHelp: "Bitte geben sie den Zugangscode ein der Ihnen per Email geschickt wird"
    },
});

export type I18n = typeof ofTypeI18n;
