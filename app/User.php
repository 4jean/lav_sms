<?php

namespace App;

use App\Models\Lga;
use App\Models\State;
use App\Models\BloodGroup;
use App\Models\Nationality;
use App\Models\StaffRecord;
use Illuminate\Support\Str;
use App\Models\StudentRecord;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, MustVerifyEmail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username', 'email', 'phone', 'phone2', 'dob', 'gender', 'photo', 'address', 'bg_id', 'password', 'nal_id', 'state_id', 'lga_id', 'code', 'user_type', 'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function student_record()
    {
        return $this->hasOne(StudentRecord::class);
    }

    public function lga()
    {
        return $this->belongsTo(Lga::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function nationality()
    {
        return $this->belongsTo(Nationality::class, 'nal_id');
    }

    public function blood_group()
    {
        return $this->belongsTo(BloodGroup::class, 'bg_id');
    }

    public function staff()
    {
        return $this->hasMany(StaffRecord::class);
    }

    protected static function booted()
    {
        static::creating(function ($user) {

            if (! empty($user->code)) {
                return;
            }

            // All staff-like user types
            $staffTypes = [
                'staff',
                'super_admin',
                'admin',
                'accountant',
                'librarian',
            ];

            if (in_array($user->user_type, $staffTypes, true)) {
                $prefix = 'STF';
            } else {
                $prefixMap = [
                    'student' => 'STU',
                    'parent'  => 'PAR',
                    'teacher' => 'TCH',
                ];

                $prefix = $prefixMap[$user->user_type] ?? 'USR';
            }

            do {
                $code = $prefix . '-' . strtoupper(Str::random(8));
            } while (self::where('code', $code)->exists());

            $user->code = $code;
        });
    }
}