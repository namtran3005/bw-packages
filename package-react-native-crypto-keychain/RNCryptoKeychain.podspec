require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNCryptoKeychain"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = "http://bitwala.com"
  s.platform     = :ios, "9.0"
  s.ios.deployment_target = '9.0'
  
  s.source       = { :git => "https://github.com/bitwala/react-native-crypto-keychain.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/**/*.{h,m}"

  s.dependency 'React'
end
