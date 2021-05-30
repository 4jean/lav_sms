<html>
<head>
    <title>Student Marksheet - {{ $sr->user->name }}</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/my_print.css') }}" />
</head>
<body>
<div class="container">
    <div id="print" xmlns:margin-top="http://www.w3.org/1999/xhtml">
        {{--    Logo N School Details--}}
        <table width="100%">
            <tr>
                <td><img src="{{ $s['logo'] }}" style="max-height : 100px;"></td>

                <td style="text-align: center; ">
                    <strong><span style="color: #1b0c80; font-size: 25px;">{{ strtoupper(Qs::getSetting('system_name')) }}</span></strong><br/>
                   {{-- <strong><span style="color: #1b0c80; font-size: 20px;">MINNA, NIGER STATE</span></strong><br/>--}}
                    <strong><span
                                style="color: #000; font-size: 15px;"><i>{{ ucwords($s['address']) }}</i></span></strong><br/>
                    <strong><span style="color: #000; font-size: 15px;"> REPORT SHEET {{ '('.strtoupper($class_type->name).')' }}
                    </span></strong>
                </td>
                <td style="width: 100px; height: 100px; float: left;">
                    <img src="{{ $sr->user->photo }}"
                         alt="..."  width="100" height="100">
                </td>
            </tr>
        </table>
        <br/>

        {{--Background Logo--}}
        <div style="position: relative;  text-align: center; ">
            <img src="{{ $s['logo'] }}"
                 style="max-width: 500px; max-height:600px; margin-top: 60px; position:absolute ; opacity: 0.2; margin-left: auto;margin-right: auto; left: 0; right: 0;" />
        </div>

        {{--<!-- SHEET BEGINS HERE-->--}}
@include('pages.support_team.marks.print.sheet')

        {{--Key to Grading--}}
        {{--@include('pages.support_team.marks.print.grading')--}}

        {{-- TRAITS - PSCHOMOTOR & AFFECTIVE --}}
        @include('pages.support_team.marks.print.skills')

        <div style="margin-top: 25px; clear: both;"></div>

        {{--    COMMENTS & SIGNATURE    --}}
        @include('pages.support_team.marks.print.comments')

    </div>
</div>

<script>
    window.print();
</script>
</body>

</html>
