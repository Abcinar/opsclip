ASR_CONFIG = {
    "ar": {"model": "whisper-large-v3", "variants": ["egyptian","gulf","levantine"], "rtl": True},
    "hi": {"model": "whisper-large-v3", "features": ["code_switching","hinglish"]},
    "id": {"model": "whisper-medium"},
    "tr": {"model": "whisper-large-v3"},
    "en": {"model": "whisper-large-v3"},
}
def get_model(language: str) -> dict:
    return ASR_CONFIG.get(language, ASR_CONFIG["en"])
