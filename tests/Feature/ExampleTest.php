<?php

namespace Tests\Feature;

use Tests\TestCase;

class SecurityBaselineTest extends TestCase
{
    public function test_guest_is_redirected_to_login(): void
    {
        $this->get('/')->assertRedirect('/login');
    }

    public function test_public_registration_is_disabled(): void
    {
        $this->get('/register')->assertStatus(404);
    }

    public function test_guest_cannot_change_graduation_state(): void
    {
        $this->put('/students/not_graduated/1')->assertRedirect('/login');
    }

    public function test_guest_cannot_delete_timetable_record(): void
    {
        $this->delete('/timetables/records/1')->assertRedirect('/login');
    }
}
