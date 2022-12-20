import { Language } from '../../types/entities/lib/language';
import { Handler } from '../handler';

export class PersonSettingsHandler extends Handler {
  public setLanguage(
    personId: string,
    language: 'en' | 'de'
  ): Promise<Language> {
    return this.client.post({
      url: `/persons/${personId}/settings`,
      data: { language: language.toUpperCase() },
    });
  }
}
