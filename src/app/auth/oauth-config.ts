import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8081/realms/TO-DO-APP',
  tokenEndpoint: 'http://localhost:8081/realms/TO-DO-APP/protocol/openid-connect/token',
  redirectUri: window.location.origin,
  clientId: 'Todo-App',
  responseType: 'code',
  scope: 'openid profile',
  showDebugInformation: true,
};

export function initializeOAuth(oauthService: OAuthService): () => Promise<void> {
  return () => {
    oauthService.configure(authCodeFlowConfig);
    oauthService.setupAutomaticSilentRefresh();
    return oauthService.loadDiscoveryDocumentAndLogin().then(() => {});
  };
}
