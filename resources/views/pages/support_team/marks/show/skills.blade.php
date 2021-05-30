<div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header header-elements-inline bg-danger">
                <h6 class="card-title font-weight-bold">AFFECTIVE TRAITS</h6>
                {!! Qs::getPanelOptions() !!}
            </div>

            <div class="card-body collapse">
                <form class="ajax-update" method="post" action="{{ route('marks.skills_update', ['AF', $exr->id]) }}">
                    @csrf @method('PUT')
                    @foreach($skills->where('skill_type', 'AF') as $af)
                        <div class="form-group row">
                            <label for="af" class="col-lg-6 col-form-label font-weight-semibold">{{ $af->name }}</label>
                            <div class="col-lg-6">
                                <select data-placeholder="Select" name="af[]" id="af" class="form-control select">
                                    <option value=""></option>
                                    @for($i=1; $i<=5; $i++)
                                        <option {{ $exr->af && explode(',', $exr->af)[$loop->index] == $i ? 'selected' : '' }} value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>

                            </div>
                        </div>
                    @endforeach



                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="card">
            <div class="card-header header-elements-inline bg-success">
                <h6 class="card-title font-weight-bold">PSYCHOMOTOR SKILLS</h6>
                {!! Qs::getPanelOptions() !!}
            </div>

            <div class="card-body collapse">
                <form class="ajax-update" method="post" action="{{ route('marks.skills_update', ['PS', $exr->id]) }}">
                    @csrf @method('PUT')
                    @foreach($skills->where('skill_type', 'PS') as $ps)
                        <div class="form-group row">
                            <label for="ps" class="col-lg-6 col-form-label font-weight-semibold">{{ $ps->name }}</label>
                            <div class="col-lg-6">
                                <select data-placeholder="Select" name="ps[]" id="ps" class="form-control select">
                                    <option value=""></option>
                                    @for($i=1; $i<=5; $i++)
                                        <option {{ $exr->ps && explode(',', $exr->ps)[$loop->index] == $i ? 'selected' : '' }} value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                            </div>
                        </div>
                    @endforeach



                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
