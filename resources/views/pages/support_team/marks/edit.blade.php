<form class="ajax-update" action="{{ route('marks.update', [$exam_id, $my_class_id, $section_id, $subject_id]) }}" method="post">
    @csrf @method('put')
    <table class="table table-striped">
        <thead>
        <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>ADM_NO</th>
            @if($class_type->code == 'J')
                <th>1ST CA (10)</th>
                <th>MT CA (20)</th>
                <th>2ND CA (10)</th>
                <th>EXAM (60)</th>
            @endif
            @if($class_type->code == 'S')
                <th>1ST CA (5)</th>
                <th>MID CA (15)</th>
                <th>2ND CA (10)</th>
                <th>EXAM (70)</th>
            @endif
            @if($class_type->code == 'P')
                <th>1ST CA (10)</th>
                <th>2ND CA (10)</th>
                <th>MT CA (20)</th>
                <th>EXAM (60)</th>
            @endif
            @if($class_type->code == 'N')
                <th>TEST (40)</th>
                <th>EXAM (60)</th>
            @endif
        </tr>
        </thead>
        <tbody>
        @foreach($marks->sortBy('user.name') as $mk)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $mk->user->name }} </td>
                <td>{{ $mk->user->student_record->adm_no }}</td>

                @if($class_type->code == 'J')
                    <td><input title="1ST CA" min="1" max="10" class="text-center" name="t1_{{ $mk->id }}" value="{{ $mk->t1 }}" type="number"></td>
                    <td><input title="MID CA" min="1" max="20" class="text-center" name="t2_{{ $mk->id }}" value="{{ $mk->t2 }}" type="number"></td>
                    <td><input title="2ND CA" min="1" max="10" class="text-center" name="t3_{{ $mk->id }}" value="{{ $mk->t3 }}" type="number"></td>
                    <td><input title="EXAM" min="1" max="60" class="text-center" name="exm_{{ $mk->id }}" value="{{ $mk->exm }}" type="number"></td>
                @endif

                @if($class_type->code == 'S')
                    <td><input title="1ST CA" min="1" max="5" class="text-center" name="t1_{{ $mk->id }}" value="{{ $mk->t1 }}" type="number"></td>
                    <td><input title="MID CA" min="1" max="15" class="text-center" name="t2_{{ $mk->id }}" value="{{ $mk->t2 }}" type="number"></td>
                    <td><input title="2ND CA" min="1" max="10" class="text-center" name="t3_{{ $mk->id }}" value="{{ $mk->t3 }}" type="number"></td>
                    <td><input title="EXAM" min="1" max="70" class="text-center" name="exm_{{ $mk->id }}" value="{{ $mk->exm }}" type="number"></td>
                @endif

                @if($class_type->code == 'P')
                    <td><input title="1ST CA" min="1" max=10 class="text-center" name="t1_{{ $mk->id }}" value="{{ $mk->t1 }}" type="number"></td>
                    <td><input title="2ND CA" min="1" max="10" class="text-center" name="t2_{{ $mk->id }}" value="{{ $mk->t2 }}" type="number"></td>
                    <td><input title="MID CA" min="1" max="20" class="text-center" name="t3_{{ $mk->id }}" value="{{ $mk->t3 }}" type="number"></td>
                    <td><input title="EXAM" min="1" max="60" class="text-center" name="exm_{{ $mk->id }}" value="{{ $mk->exm }}" type="number"></td>
                @endif

                @if($class_type->code == 'N')
                    <td><input title="TEST" min="1" max="40" class="text-center" name="t1_{{ $mk->id }}" value="{{ $mk->t1 }}" type="number"></td>
                    <td><input title="EXAM" min="1" max="60" class="text-center" name="exm_{{ $mk->id }}" value="{{ $mk->exm }}" type="number"></td>
                @endif


            </tr>
        @endforeach
        </tbody>
    </table>

    <div class="text-center mt-2">
        <button type="submit" class="btn btn-primary">Update Marks <i class="icon-paperplane ml-2"></i></button>
    </div>
</form>
