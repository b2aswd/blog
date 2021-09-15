require 'spaceship'

# 1
Spaceship::Portal.login(<APPLE_ID>, <PASSWORD>)
Spaceship::Portal.select_team

# 2
Spaceship::Portal.provisioning_profile.development.all.map { |profile| [profile.app.bundle_id, profile.expires] }.to_h

# 3
Spaceship::Portal.certificate.apple_development.all.map { |cert| [cert.id, cert.expires] }.to_h
Spaceship::Portal.certificate.production_push.all.map { |cert| [cert.id, cert.expires] }.to_h

# 4
Spaceship::Portal.client.teams.map { |team| team['memberships'].min { |membership| membership['dateExpire'] } }

# 5
Spaceship::ConnectAPI.login(<APPLE_ID>, <PASSWORD>, use_portal: false)

# 6
Spaceship::ConnectAPI::Build.all.filter { |build| build.build_beta_detail.external_build_state == Spaceship::ConnectAPI::BuildBetaDetail::ExternalState::IN_BETA_TESTING }