@extends('layouts.login_master')

@section('content')

    <div class="page-content">
        <div class="content-wrapper">
            <div class="content">
                <div class="card">
                    <div class="card-header">
                        <h1 class="card-title font-weight-bold text-center">TERMS OF USE</h1>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div style="font-size: 16px;" class="col-md-10 offset-md-1">
                                <p>Last modified: November 4, 2019</p>

                                <h4 class="font-weight-semibold">Acceptance of the Terms of Use</h4>

                                <p>These terms of use are entered into by and between You and {{ $app_name }} ("we" or "us"). The following terms and conditions and all documents incorporated by reference (collectively, "Terms of Use"), govern your access to and use of <a target="_blank" href="{{ $app_url }}">{{ $app_url }}</a>, including any content, functionality and services offered on or through <a target="_blank" href="{{ $app_url }}">{{ $app_url }}</a> (the "Website").</p>

                                <p>Please read the Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at <a target="_blank" href="{{ route('privacy_policy') }}">{{ route('privacy_policy') }}</a>, incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.</p>

                                <h4 class="font-weight-semibold">Changes To The Terms Of Use</h4>

                                <p>We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them. However, any changes to the dispute resolution provisions set forth in Governing Law and Jurisdiction will not apply to any disputes for which the parties have actual notice prior to the date the change is posted on the Website.</p>

                                <p>Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.</p>

                                <h4 class="font-weight-semibold">Accessing The Website And Account Security</h4>
                                <p>We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users.</p>

                                <h3>Article I</h3>
                                <p>You are responsible for:</p>

                                <ul>
                                    <li>Making all arrangements necessary for you to have access to the Website.</li>
                                    <li>Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</li>
                                </ul>

                                <p>To access the Website or some of the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete. You agree that all information you provide to register with this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.</p>

                                <p>If you choose, or are provided with, a user name, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your user name, password or other security information. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You also agree to ensure that you exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.</p>

                                <p>We have the right to disable any user name, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use.</p>

                                <h4 class="font-weight-semibold">Intellectual Property Rights</h4>

                               <p>The Website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by us, our licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.</p>

                                <p>These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website in violation of any laws.</p>

                                <p>You must not access or use for any commercial purposes any part of the Website or any services or materials available through the Website.</p>

                                <h4 class="font-weight-semibold">Trademarks</h4>

                                <p>The {{ $app_name }} name and all related names, logos, slogans, mottos, and designs are trademarks of ours or our affiliates or licensors. You must not use such marks without our prior written permission. All other names, logos, product and service names, designs and slogans on this Website are the trademarks of their respective owners.</p>

                                <h4 class="font-weight-semibold">Prohibited Uses</h4>

                                <ul>
                                    <li>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</li>
                                    <li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).</li>
                                    <li>For the purpose of exploiting, harming or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information or otherwise.</li>
                                    <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with the Content Standards set out in these Terms of Use.</li>
                                    <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
                                    <li>To impersonate or attempt to impersonate us, one of our employees, another user or any other person or entity (including, without limitation, by using e-mail addresses or screen names associated with any of the foregoing.)</li>
                                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm us or users of the Website or expose them to liability.</li>
                                </ul>

                                <h4 class="font-weight-semibold">Additionally, You Agree Not To:</h4>
                                <ul>
                                    <li>Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Website, including their ability to engage in real time activities through the Website.</li>
                                    <li>Use any robot, spider or other automatic device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li>
                                    <li>Use any manual process to monitor or copy any of the material on the Website or for any other unauthorized purpose without our prior written consent.</li>
                                    <li>Use any device, software or routine that interferes with the proper working of the Website.</li>
                                    <li>Introduce any viruses, Trojan horses, worms, logic bombs or other material which is malicious or technologically harmful.</li>
                                    <li>Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer or database connected to the Website.</li>
                                    <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.</li>
                                    <li>Use the Website in any manner that violates any applicable {{ $app_name }} policy, rule, or procedure.</li>
                                    <li>Use the Website in any manner that contravenes Catholic Mercy tradition, faith, and morals or the legacy of Catholic Mercy education.</li>
                                    <li>Otherwise attempt to interfere with the proper working of the Website.</li>
                                </ul>

                                <h4 class="font-weight-semibold">User Contributions</h4>

                                <p>The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, "Interactive Services") that allow users to post, submit, publish, display or transmit to other users or other persons (hereinafter, "post") content or materials (collectively, "User Contributions") on or through the Website.</p>

                                <p>All User Contributions must comply with the Content Standards set out in these Terms of Use.</p>

                                <p>Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Website, you grant us and our licensees, successors and assigns the right to use, reproduce, modify, perform, display, distribute and otherwise disclose to third parties any such material.</p>

                                <p>You represent and warrant that:</p>

                                <ul>
                                    <li>You own or control all rights in and to the User Contributions and have the right to grant the license granted above to us and our licensees, successors and assigns.</li>
                                    <li> All of your User Contributions do and will comply with these Terms of Use.</li>
                                </ul>

                                <p>You understand and acknowledge that you are responsible for any User Contributions you submit or contribute, and you, not us, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness.</p>

                                <p>We are not responsible, or liable to any third party, for the content or accuracy of any User Contributions posted by you or any other user of the Website.</p>

                                <h4 class="font-weight-semibold">Monitoring And Enforcement; Termination</h4>
                                <p>We have the right to:</p>

                                <ul>
                                    <li>Remove or refuse to post any User Contributions for any or no reason in our sole discretion.</li>
                                    <li>Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion, including if we believe that such User Contribution violates the Terms of Use, including the Content Standards, infringes any intellectual property right or other right of any person or entity, threatens the personal safety of users of the Website or the public or could create liability for us.</li>
                                    <li>Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.</li>
                                    <li>Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website.</li>
                                    <li> Terminate or suspend your access to all or part of the Website for any or no reason, including without limitation, any violation of these Terms of Use.</li>
                                </ul>

                               <p> Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Website.</p>

                                <p>YOU WAIVE AND HOLD HARMLESS {{ strtoupper($app_name) }} FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY {{ strtoupper($app_name) }} DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY {{ strtoupper($app_name) }} OR LAW ENFORCEMENT AUTHORITIES.</p>

                                <p>However, we do not undertake to review all material before it is posted on the Website, and cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party. We have no liability or responsibility to anyone for performance or nonperformance of the activities described in this section.</p>

                                <h4 class="font-weight-semibold">Content Standards</h4>

                                <p>These content standards apply to any and all User Contributions and use of Interactive Services. User Contributions must in their entirety comply with all applicable federal, state, local and international laws and regulations. Without limiting the foregoing, User Contributions must not:</p>

                                <ul>
                                    <li> Contain any material which is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory or otherwise objectionable.</li>
                                    <li> Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>
                                    <li> Infringe any patent, trademark, trade secret, copyright or other intellectual property or other rights of any other person.</li>
                                    <li>Violate the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms of Use and our <a target="_blank" href="{{ route('privacy_policy') }}">Privacy Policy</a>.</li>
                                    <li>Be likely to deceive any person.</li>
                                    <li>Promote any illegal activity, or advocate, promote or assist any unlawful act.</li>
                                    <li>Cause annoyance, inconvenience or needless anxiety or be likely to upset, embarrass, alarm or annoy any other person.</li>
                                    <li>Impersonate any person, or misrepresent your identity or affiliation with any person or organization.</li>
                                    <li>Involve commercial activities or sales, such as contests, sweepstakes and other sales promotions, barter or advertising.</li>
                                    <li>Give the impression that they emanate from or are endorsed by us or any other person or entity, if this is not the case.</li>
                                </ul>

                                <h4 class="font-weight-semibold">Copyright Infringement</h4>
                                <p>If you believe that any User Contributions violate your copyright, please contact us</p>

                                <h5 class="font-weight-semibold">Reliance on Information Posted</h5>

                                <p>The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.</p>

                                <p>This Website may include content provided by third parties, including materials provided by other users, bloggers and third-party licensors, syndicators, aggregators and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by us, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of us. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.</p>

                                <h4 class="font-weight-semibold">Changes To The Website</h4>
                                <p>We may update the content on this Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.</p>

                                <p>Information About You and Your Visits to the Website</p>

                                <p>All information we collect on this Website is subject to our Privacy Policy. By using the Website, you consent to all actions taken by us with respect to your information in compliance with the <a target="_blank" href="{{ route('privacy_policy') }}">Privacy Policy</a>.</p>

                                <h3>Article II</h3>

                                <h4 class="font-weight-semibold">Linking to the Website and Social Media Features</h4>

                                <p>vYou may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part without our express written consent.</p>

                                <p>You agree to cooperate with us in removing any link we ask you to. We reserve the right to withdraw linking permission without notice.</p>

                                <p>We may disable all or any social media features and any links at any time without notice in our discretion.</p>

                                <h4 class="font-weight-semibold">Links from the Website</h4>

                                <p>If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.</p>

                                <h4 class="font-weight-semibold">Disclaimer of Warranties</h4>

                                <p>You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.</p>

                                <p>YOUR USE OF THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER {{ strtoupper($app_name) }} NOR ANY PERSON ASSOCIATED WITH {{ strtoupper($app_name) }} MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER {{ strtoupper($app_name) }} NOR ANYONE ASSOCIATED WITH {{ strtoupper($app_name) }} REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>

                                <p>{{ strtoupper($app_name) }} HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF NON-INFRINGEMENT.</p>

                                <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

                                <h4 class="font-weight-semibold">Limitation on Liability</h4>

                                <p>IN NO EVENT WILL {{ strtoupper($app_name) }}, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.</p>

                                <p>THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

                                <h4 class="font-weight-semibold">Indemnification</h4>

                                <p>You agree to defend, indemnify and hold harmless {{ $app_name }}, its affiliates, licensors and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website, including, but not limited to, your User Contributions, any use of the Website's content, services and products other than as expressly authorized in these Terms of Use or your use of any information obtained from the Website.</p>

                                <h4 class="font-weight-semibold">Governing Law and Jurisdiction</h4>

                                <p>All matters relating to the Website and these Terms of Use and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of Nigeria without giving effect to any choice or conflict of law provision or rule.</p>

                                <p>Any legal suit, action or proceeding arising out of, or related to, these Terms of Use or the Website shall be instituted exclusively in the federal courts of Nigeria, although we retain the right to bring any suit, action or proceeding against you for breach of these Terms of Use in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</p>

                                <h4 class="font-weight-semibold">Arbitration</h4>

                                <p>At {{ $app_name }}’s sole discretion, it may require You to submit any disputes arising from the use of these Terms of Use or the Website, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Arbitration and Concilliation Act of Nigeria</p>

                                <h4 class="font-weight-semibold">Limitation on Time to File Claims</h4>

                                <p>ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.</p>

                                <h4 class="font-weight-semibold">Waiver and Severability</h4>

                                <p>No waiver of by {{ $app_name }} of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of {{ $app_name }} to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.</p>

                                <p>If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.</p>

                                <h4 class="font-weight-semibold">Entire Agreement</h4>

                                <p>These Terms of Use and our <a target="_blank" href="{{ route('privacy_policy') }}">Privacy Policy</a> constitute the sole and entire agreement between you and {{ $app_name }} with respect to the Website and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to the Website.</p>

                                <h5 class="font-weight-semibold">Your Comments and Concerns</h5>
                                <p>If you do have any comments or concerns regarding but not limited to these Terms of Use. Please contact us.</p>

                                <p>This website is operated by {{ $app_name }}.</p>

                                <p>All other feedback, comments, requests for technical support and other communications relating to the Website should be directed to the School Administrator. Please call {{ $contact_phone }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
