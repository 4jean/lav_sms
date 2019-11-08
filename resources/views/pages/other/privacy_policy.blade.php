@extends('layouts.login_master')

@section('content')

<div class="page-content">
    <div class="content-wrapper">
        <div class="content">
            <div class="card">
                <div class="card-header">
                    <h1 class="card-title font-weight-bold text-center">PRIVACY POLICY</h1>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div style="font-size: 16px;" class="col-md-10 offset-md-1">
                            <p>Last modified: November 4, 2019</p>

                            <h4 class="font-weight-semibold">Introduction</h4>

                            <p>{{ $app_name }} ("We") respects your privacy and is committed to protecting it through our compliance with this policy.</p>

                            <p>This policy describes the types of information we may collect from you or that you may provide when you visit the website
                                <a target="_blank" href="{{ $app_url }}">{{ $app_url }}</a> (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>

                            <p>This policy applies to information we collect:</p>

                            <ul>
                                <li>On this Website.</li>
                                <li>In email, text, and other electronic messages between you and this Website.</li>
                            </ul>

                           <p> Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is to not use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.</p>

                            <h4 class="font-weight-semibold">Children Under the Age of 13</h4>

                           <p> We do not knowingly collect personal information from children under 13. If you are under 13, do not provide any information on this Website or on or through any of its features without first obtaining parental consent. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please call {{ $contact_phone }}</p>

                            <h4 class="font-weight-semibold">Information We Collect About You and How We Collect It</h4>

                            <p>We collect several types of information from and about users of our Website, including information:</p>

                            <ul>
                                <li>by which you may be personally identified ("personal information");</li>
                                <li>that is about you but individually does not identify you; and/or</li>
                                <li>about your internet connection, the equipment you use to access our Website, and usage details.</li>
                            </ul>

                            <p>We collect this information:</p>

                            <ul>
                                <li>Directly from you when you provide it to us.</li>
                                <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies or other tracking technologies.</li>
                            </ul>

                            <h4 class="font-weight-semibold">Information You Provide to Us. The information we collect on or through our Website may include:</h4>

                            <ul>
                                <li>Information that you provide by filling in forms or surveys on our Website. Personal information submitted will not be transferred to any non-affiliated third parties unless otherwise stated at the time of collection. When you submit personal information, it is used only for the purpose stated at the time of collection.</li>
                                <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
                            </ul>

                            <h4 class="font-weight-semibold">Information We Collect Through Automatic Data Collection Technologies:</h4>

                            <p>As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:</p>

                            <ul>
                                <li>Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.</li>
                                <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
                            </ul>

                            <p>The information we collect automatically is statistical data and may include personal information, and we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:</p>

                            <ul>
                                <li>Estimate our audience size and usage patterns.</li>
                                <li>Speed up your searches.</li>
                                <li>Recognize you when you return to our Website.</li>
                            </ul>

                            <p>The technologies we use for this automatic data collection may include:</p>

                            <ul>
                                <li><strong>Cookies</strong> (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.</li>
                                <li><strong>Flash Cookies.</strong> Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see Choices About How We Use and Disclose Your Information.</li>
                                <li><strong>Web Beacons.</strong> Pages of our Website may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</li>
                            </ul>

                            <h4 class="font-weight-semibold">How We Use Your Information</h4>

                            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>

                            <ul>
                                <li>To present our Website and its contents to you.</li>
                                <li>To allow you to participate in interactive features on our Website.</li>
                                <li>In any other way we may describe when you provide the information.</li>
                                <li>For any other purpose with your consent.</li>
                            </ul>

                            <h4 class="font-weight-semibold">Disclosure of Your Information</h4>

                            <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>

                            <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>

                            <ul>
                                <li>To fulfill the purpose for which you provide it.</li>
                                <li>For any other purpose disclosed by us when you provide the information.</li>
                                <li>With your consent.</li>
                            </ul>

                            <p>We may also disclose your personal information:</p>

                            <ul>
                                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                                <li>To enforce or apply our <a target="_blank" href="{{ route('terms_of_use') }}">Terms of Use</a>.</li>
                                <li>If we believe disclosure is necessary or appropriate to protect our rights, property, or safety of our students or others.</li>
                            </ul>

                            <h4 class="font-weight-semibold">Choices About How We Use and Disclose Your Information</h4>
                            <p>We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:</p>

                            <ul>
                                <li><strong>Tracking Technologies and Advertising</strong>. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe's website. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.</li>
                            </ul>

                            <h4 class="font-weight-semibold">Data Security</h4>

                            <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>

                            <h4 class="font-weight-semibold">Changes to Our Privacy Policy</h4>

                           <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.</p>

                            <h4 class="font-weight-semibold">Contact Information</h4>

                            <p>To ask questions or comment about this privacy policy and our privacy practices, please call {{ $contact_phone }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</div>
</div>
@endsection
