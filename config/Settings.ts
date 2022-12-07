import { ISetting, SettingType} from '@rocket.chat/apps-engine/definition/settings';

export enum AppSetting {
    ChatGPTGlobalToken = 'chatgpt_global_token',
    ChatGPTAction = 'chatgpt_action'
}

export const settings: Array<ISetting> = [
    {
        id: AppSetting.ChatGPTGlobalToken,
        public: true,
        type: SettingType.STRING,
        value: "",
        packageValue: "",
        hidden: false,
        i18nLabel: 'ChatGPT_GlobalToken',
        required: false,
    },
    {
        id: AppSetting.ChatGPTAction,
        public: true,
        type: SettingType.SELECT,
        values: [{"key": "message", "i18nLabel": "ChatGPT_Action_Message"},{"key": "notification", "i18nLabel": "ChatGPT_Action_Notification"}],
        value: "notification",
        packageValue: "notification",
        hidden: false,
        i18nLabel: 'ChatGPT_Action',
        required: false,
    },
]