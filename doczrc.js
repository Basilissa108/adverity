export default {
    title: "Adverity",
    typescript: true,
    filterComponents: (files) => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
    menu: [
        "RFC",
        {
            name: "Use cases",
            menu: [
                "Edit datastream",
                "Contact support",
                "Delete user",
                "Apply changes",
                "Alert"
            ]
        },
        {
            name: "Components",
            menu: [
                "Button",
                "ConfirmationBar",
                "Form",
                "Icon",
                "Image",
                "Input",
                "Modal",
                "Textarea",
                "Toast",
                "Typography"
            ]
        }
    ]
}